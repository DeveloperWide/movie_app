import { getFavorites, toggleFavorite } from "@/services/favorite.service";
import { Movie } from "@/types/movie";
import React, { createContext, useEffect, useState } from "react";

export interface FavoritesContextType {
  favorites: Movie[];
  isLoading: boolean;
  error: string | null;

  toggleFavorite(movie: Movie): Promise<void>;
  isFavorite(id: number): boolean;
  refreshFavorites(): Promise<void>;
}

export const FavoritesContext = createContext<FavoritesContextType | null>(
  null,
);

interface FavoritesProviderProps {
  children: React.ReactNode;
}

export function FavoritesProvider({ children }: FavoritesProviderProps) {
  const [favorites, setFavorites] = useState<Movie[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetchFavorites = async () => {
    try {
      setIsLoading(true);
      setError(null);

      const data = await getFavorites();

      setFavorites(data);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong");
    } finally {
      setIsLoading(false);
    }
  };

  const handleToggleFavorite = async (movie: Movie) => {
    try {
      await toggleFavorite(movie);

      await fetchFavorites();
    } catch (err) {
      setError(
        err instanceof Error ? err.message : "Failed to update favorites",
      );
    }
  };

  const isFavorite = (id: number): boolean => {
    return favorites.some((movie) => movie.id === id);
  };

  useEffect(() => {
    fetchFavorites();
  }, []);

  return (
    <FavoritesContext.Provider
      value={{
        favorites,
        isLoading,
        error,
        toggleFavorite: handleToggleFavorite,
        isFavorite,
        refreshFavorites: fetchFavorites,
      }}
    >
      {children}
    </FavoritesContext.Provider>
  );
}
