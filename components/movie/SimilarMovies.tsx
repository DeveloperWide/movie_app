import { useSimilarMovies } from "@/hooks/useSimilarMovies";
import React from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import EmptyState from "../common/EmptyState";
import Error from "../common/Error";
import Loading from "../common/Loading";
import SimilarMovieCard from "./cards/SimilarMovieCard";

interface SimilarMoviesProps {
  movieId: number;
}

const SimilarMovies = ({ movieId }: SimilarMoviesProps) => {
  const { data, isLoading, error } = useSimilarMovies(movieId);

  if (isLoading) return <Loading loadingMsg="Loading Similar Movies..." />;

  if (error) return <Error err={error} />;

  return (
    <>
      <View style={styles.overviewContainer}>
        <Text style={styles.sectionTitle}>Similar Movies</Text>
        <View style={styles.divider} />
      </View>
      {data.length > 0 ? (
        <FlatList
          data={data}
          renderItem={({ item }) => <SimilarMovieCard movie={item} />}
          keyExtractor={(item) => item.id.toString()}
          horizontal
          showsHorizontalScrollIndicator={false}
        />
      ) : (
        <EmptyState title="No Similar Movies Found" subtitle="" />
      )}
    </>
  );
};

export default SimilarMovies;

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
