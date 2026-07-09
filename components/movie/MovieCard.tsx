import { IMAGE_BASE_URL } from "@/constants/config";
import { Movie } from "@/types/movie";
import { router } from "expo-router";
import React from "react";
import { Image, Pressable, StyleSheet, Text, View } from "react-native";

interface MovieCardProps {
  movie: Movie;
}

const MovieCard = ({ movie }: MovieCardProps) => {
  return (
    <Pressable onPress={() => router.push(`/movie/${movie.id}`)}>
      <View style={styles.container}>
        <Image
          source={{
            uri: `${IMAGE_BASE_URL}${movie.poster_path}`,
          }}
          style={styles.image}
        />
        <View style={styles.textContainer}>
          <Text style={styles.text}>{movie.title}</Text>
          <Text style={styles.text}> ⭐ {movie.vote_average.toFixed(1)}</Text>
        </View>
      </View>
    </Pressable>
  );
};

export default MovieCard;

const styles = StyleSheet.create({
  container: {
    marginTop: 3,
    backgroundColor: "#133",
    marginBottom: 5,
    borderRadius: 10,
  },
  textContainer: {
    paddingVertical: 5,
    paddingHorizontal: 5,
  },
  image: {
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    width: "100%",
    height: 400,
  },
  text: {
    color: "white",
  },
});
