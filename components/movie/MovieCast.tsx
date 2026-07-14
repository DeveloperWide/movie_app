import { useMovieCast } from "@/hooks/useMovieCast";
import React from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import EmptyState from "../common/EmptyState";
import Error from "../common/Error";
import Loading from "../common/Loading";
import MovieCastCard from "./cards/MovieCastCard";

interface MovieCastProps {
  movieId: number;
}

const MovieCast = ({ movieId }: MovieCastProps) => {
  const { data, isLoading, error } = useMovieCast(movieId);

  if (isLoading) return <Loading loadingMsg="Loading Moive Cast..." />;

  if (error) return <Error err={error} />;

  return (
    <>
      <View style={styles.overviewContainer}>
        <Text style={styles.sectionTitle}>Movie Cast</Text>
        <View style={styles.divider} />
      </View>
      {data.length > 0 ? (
        <FlatList
          data={data}
          renderItem={({ item }) => <MovieCastCard data={item} />}
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

export default MovieCast;

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
