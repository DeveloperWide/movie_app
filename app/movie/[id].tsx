import Error from "@/components/common/Error";
import Loading from "@/components/common/Loading";
import MovieDetails from "@/components/movie/MovieDetails";
import { useMovieDetails } from "@/hooks/useMovieDetails";
import { useLocalSearchParams } from "expo-router";
import React from "react";

export default function MovieDetailsScreen() {
  const { id } = useLocalSearchParams();
  const { isLoading, data, error } = useMovieDetails(Number(id));

  if (isLoading) {
    return <Loading loadingMsg="loading Movie Details..." />;
  }

  if (error) {
    return <Error err={error} />;
  }

  if (!data) return null;

  return <MovieDetails data={data} />;
}
