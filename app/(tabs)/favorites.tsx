import Error from "@/components/common/Error";
import Loading from "@/components/common/Loading";
import MovieCard from "@/components/movie/MovieCard";
import { useFavorites } from "@/hooks/useFavorites";
import React from "react";
import { FlatList, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Favorites() {
  const { favorites, isLoading, error } = useFavorites();

  if (isLoading) {
    return <Loading loadingMsg="Loading Favorites" />;
  }

  if (error) {
    return <Error err={error} />;
  }

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={favorites}
        renderItem={({ item }) => <MovieCard movie={item} />}
        keyExtractor={(item) => item.id.toString()}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          paddingBottom: 30,
        }}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});
