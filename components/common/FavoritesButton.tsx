import { useFavorites } from "@/hooks/useFavorites";
import { Movie } from "@/types/movie";
import { Heart } from "lucide-react-native";
import React from "react";
import { Pressable, StyleSheet } from "react-native";

interface FavoritesButtonProps {
  movie: Movie;
}

const FavoritesButton = ({ movie }: FavoritesButtonProps) => {
  const { isFavorite, toggleFavorite } = useFavorites();
  const color = isFavorite(movie.id) ? "#EF4444" : "#E5E7EB";

  return (
    <Pressable
      onPress={() => toggleFavorite(movie)}
      style={styles.favoriteButton}
    >
      <Heart size={28} color={color} fill={color} />
    </Pressable>
  );
};

export default FavoritesButton;

const styles = StyleSheet.create({
  favoriteButton: {
    position: "absolute",
    top: 12,
    right: 12,
    zIndex: 20,
  },
});
