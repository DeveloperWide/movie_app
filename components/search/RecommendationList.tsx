import { useTrendingMovies } from "@/hooks/useTrendingMovies";
import React from "react";
import { FlatList } from "react-native";
import Error from "../common/Error";
import Loading from "../common/Loading";
import MovieCard from "../movie/MovieCard";

const RecommendationList = () => {
  const { data, isLoading, error } = useTrendingMovies();

  if (isLoading) return <Loading />;

  if (error) return <Error err={error} />;

  return (
    <FlatList
      data={data}
      renderItem={({ item }) => <MovieCard movie={item} />}
      keyExtractor={(item) => item.id.toString()}
    />
  );
};

export default RecommendationList;
