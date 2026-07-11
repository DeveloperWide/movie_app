import { FAVORITES_KEY } from "@/constants/config";
import { Movie } from "@/types/movie";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const getFavorites = async (): Promise<Movie[]> => {
  try {
    const favorites = await AsyncStorage.getItem(FAVORITES_KEY);
    if (favorites == null) return [];
    return JSON.parse(favorites) as Movie[];
  } catch (error) {
    throw new Error("Failed to load favorites");
  }
};

export const saveFavorites = async (updated: Movie[]): Promise<void> => {
  try {
    await AsyncStorage.setItem(FAVORITES_KEY, JSON.stringify(updated));
  } catch {
    throw new Error("Failed to save favorites");
  }
};

export const addFavorite = async (movie: Movie): Promise<void> => {
  try {
    const favorites = await getFavorites();

    const alreadyExists = favorites.some((fav) => fav.id === movie.id);
    if (alreadyExists) return;

    const updated = [...favorites, movie];
    await saveFavorites(updated);
  } catch (error) {
    throw new Error("Failed to add favorite");
  }
};

export const removeFavorite = async (movieId: number): Promise<void> => {
  try {
    const favorites = await getFavorites();
    const updated = favorites.filter((fav) => fav.id !== movieId);
    await saveFavorites(updated);
  } catch (error) {
    throw new Error("Failed to remove favorite");
  }
};

export const toggleFavorite = async (movie: Movie): Promise<void> => {
  try {
    const favorites = await getFavorites();

    const exists = favorites.some((fav) => fav.id === movie.id);

    if (exists) {
      const updated = favorites.filter((fav) => fav.id !== movie.id);
      await saveFavorites(updated);
    } else {
      await saveFavorites([...favorites, movie]);
    }
  } catch (error) {
    throw new Error("Failed to toggle");
  }
};

export const isFavorite = async (movieId: number): Promise<boolean> => {
  try {
    const favorites = await getFavorites();
    return favorites.some((fav) => fav.id === movieId);
  } catch (err) {
    return false;
  }
};
