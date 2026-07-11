import { useSearchMovies } from "@/hooks/useSearchMovies";
import React from "react";
import { FlatList } from "react-native";
import EmptyState from "../common/EmptyState";
import Error from "../common/Error";
import Loading from "../common/Loading";
import MovieCard from "../movie/MovieCard";

interface SearchResultsProps {
  query: string;
}

const SearchResults = ({ query }: SearchResultsProps) => {
  const { data, isLoading, error } = useSearchMovies(query);

  if (isLoading) return <Loading />;

  if (error) return <Error err={error} />;

  if (!data.length) {
    return (
      <EmptyState
        title="No Movies Found"
        subtitle="Try searching with another movie name."
      />
    );
  }

  return (
    <FlatList
      data={data}
      renderItem={({ item }) => <MovieCard movie={item} />}
      keyExtractor={(item) => item.id.toString()}
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{
        paddingHorizontal: 16,
        paddingBottom: 30,
      }}
    />
  );
};

export default SearchResults;
