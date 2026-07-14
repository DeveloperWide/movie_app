import { IMAGE_BASE_URL } from "@/constants/config";
import { Movie } from "@/types/movie";
import { router } from "expo-router";
import React from "react";
import { Image, Pressable, StyleSheet, Text, View } from "react-native";

interface SimilarMovieCardProps {
  movie: Movie;
}

const SimilarMovieCard = ({ movie }: SimilarMovieCardProps) => {
  return (
    <View style={styles.listContainer}>
      <Pressable onPress={() => router.push(`/movie/${movie.id}`)}>
        <Image
          source={{ uri: `${IMAGE_BASE_URL}${movie.poster_path}` }}
          style={styles.image}
          resizeMode="cover"
        />
        <Text numberOfLines={2} style={styles.title}>
          {movie.title}
        </Text>
      </Pressable>
    </View>
  );
};

export default SimilarMovieCard;

const styles = StyleSheet.create({
  title: {
    fontSize: 16,
    flexWrap: "wrap",
    fontWeight: "500",
    marginRight: 8,
    paddingVertical: 3,
    paddingHorizontal: 10,
  },

  listContainer: {
    marginVertical: 7,
    marginHorizontal: 10,
    gap: 10,
    backgroundColor: "rgb(255, 255, 255)",
    elevation: 5,
    borderRadius: 10,
    width: 130,
  },

  image: {
    height: 150,
    width: 130,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
});
