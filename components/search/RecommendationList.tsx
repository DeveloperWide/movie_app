import { useTrendingMovies } from "@/hooks/useTrendingMovies";
import React from "react";
import { FlatList, StyleSheet } from "react-native";
import Error from "../common/Error";
import Loading from "../common/Loading";
import MovieCard from "../movie/MovieCard";

const RecommendationList = () => {
  const { data, isLoading, error } = useTrendingMovies();

  if (isLoading) return <Loading loadingMsg="Loading Recommendation..." />;

  if (error) return <Error err={error} />;

  return (
    <FlatList
      data={data}
      renderItem={({ item }) => <MovieCard movie={item} />}
      keyExtractor={(item) => item.id.toString()}
      showsVerticalScrollIndicator={false}
      contentContainerStyle={styles.content}
    />
  );
};

export default RecommendationList;

const styles = StyleSheet.create({
  heading: {
    fontSize: 24,
    fontWeight: "700",
    color: "#222",
    marginBottom: 18,
  },

  content: {
    paddingHorizontal: 16,
    paddingBottom: 30,
  },
});
