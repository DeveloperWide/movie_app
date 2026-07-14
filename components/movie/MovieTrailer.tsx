import { useMovieTrailer } from "@/hooks/useMovieTrailer";
import React from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import EmptyState from "../common/EmptyState";
import Error from "../common/Error";
import Loading from "../common/Loading";
import MovieTrailerCard from "./cards/MovieTrailerCard";

interface MovieTrailerProps {
  movieId: number;
}

const MovieTrailer = ({ movieId }: MovieTrailerProps) => {
  const { data, isLoading, error } = useMovieTrailer(movieId);

  if (isLoading) return <Loading loadingMsg="Loading Moive Trailers..." />;

  if (error) return <Error err={error} />;

  return (
    <>
      <View style={styles.overviewContainer}>
        <Text style={styles.sectionTitle}>Movie Trailer</Text>
        <View style={styles.divider} />
      </View>
      {data.length > 0 ? (
        <FlatList
          data={data}
          renderItem={({ item }) => <MovieTrailerCard data={item} />}
          keyExtractor={(item) => item.id.toString()}
          horizontal
          showsHorizontalScrollIndicator={false}
        />
      ) : (
        <EmptyState title="No Cast Found" subtitle="" />
      )}
    </>
  );
};

export default MovieTrailer;

const styles = StyleSheet.create({
  overviewContainer: {
    marginTop: 24,
    paddingHorizontal: 18,
  },

  sectionTitle: {
    fontSize: 24,
    fontWeight: "800",
    color: "#222",
  },

  divider: {
    width: 60,
    height: 3,
    backgroundColor: "#2E7D32",
    marginVertical: 10,
    borderRadius: 10,
  },
});
