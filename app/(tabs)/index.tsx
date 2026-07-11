import Error from "@/components/common/Error";
import Header from "@/components/common/Header";
import Loading from "@/components/common/Loading";
import MovieCard from "@/components/movie/MovieCard";
import { useTrendingMovies } from "@/hooks/useTrendingMovies";
import { useState } from "react";
import { FlatList, StyleSheet, View } from "react-native";

export default function Index() {
  const [refreshing, setRefreshing] = useState(false);
  const { data, isLoading, error, refetch } = useTrendingMovies();

  const handleRefresh = async () => {
    try {
      setRefreshing(true);

      await refetch(1);

      setRefreshing(false);
    } finally {
      setRefreshing(false);
    }
  };

  if (isLoading) {
    return <Loading loadingMsg="Loading Moves..." />;
  }

  if (error) {
    return <Error err={error} />;
  }

  return (
    <View style={styles.container}>
      <Header />
      <FlatList
        data={data}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.listContent}
        refreshing={refreshing}
        onRefresh={handleRefresh}
        renderItem={({ item }) => <MovieCard movie={item} />}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },

  listContent: {
    paddingBottom: 30,
  },
});
