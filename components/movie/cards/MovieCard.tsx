import FavoritesButton from "@/components/common/FavoritesButton";
import { IMAGE_BASE_URL } from "@/constants/config";
import { Movie } from "@/types/movie";
import { formatDate } from "@/utils/helper";
import { router } from "expo-router";
import React from "react";
import { Image, Pressable, StyleSheet, Text, View } from "react-native";

interface MovieCardProps {
  movie: Movie;
}

const MovieCard = ({ movie }: MovieCardProps) => {
  return (
    <Pressable
      style={styles.card}
      android_ripple={{ color: "#ddd" }}
      onPress={() => router.push(`/movie/${movie.id}`)}
    >
      <FavoritesButton movie={movie} />

      <Image
        source={{
          uri: `${IMAGE_BASE_URL}${movie.poster_path}`,
        }}
        style={styles.poster}
        resizeMode="cover"
      />

      <View style={styles.content}>
        <Text style={styles.title} numberOfLines={2}>
          {movie.title}
        </Text>

        <View style={styles.infoRow}>
          <View style={styles.ratingBadge}>
            <Text style={styles.rating}>
              ⭐ {movie.vote_average.toFixed(1)}
            </Text>
          </View>

          <Text style={styles.releaseDate}>
            {formatDate(movie.release_date)}
          </Text>
        </View>
      </View>
    </Pressable>
  );
};

export default MovieCard;

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#fff",
    borderRadius: 16,
    overflow: "hidden",
    marginBottom: 18,
    elevation: 5,
  },

  poster: {
    width: "100%",
    height: 320,
  },

  content: {
    padding: 14,
  },

  title: {
    fontSize: 20,
    fontWeight: "700",
    color: "#222",
    marginBottom: 10,
  },

  infoRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  heartIcon: {
    color: "red",
  },

  ratingBadge: {
    backgroundColor: "#FFE08A",
    borderRadius: 8,
    paddingHorizontal: 10,
    paddingVertical: 5,
  },

  rating: {
    fontWeight: "700",
    color: "#222",
  },

  releaseDate: {
    color: "#666",
    fontSize: 14,
    fontWeight: "500",
  },
});
