import Error from "@/components/common/Error";
import Header from "@/components/common/Header";
import Loading from "@/components/common/Loading";
import MovieCard from "@/components/movie/cards/MovieCard";
import { useTrendingMovies } from "@/hooks/useTrendingMovies";
import { useState } from "react";
import { ActivityIndicator, FlatList, StyleSheet, View } from "react-native";

export default function Index() {
  const [refreshing, setRefreshing] = useState(false);
  const { data, isLoading, loadingMore, error, refetch, loadMore } =
    useTrendingMovies();

  const handleRefresh = async () => {
    try {
      setRefreshing(true);

      await refetch();

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
        renderItem={({ item }) => <MovieCard movie={item} />}
        keyExtractor={(item) => item.id.toString()}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.listContent}
        refreshing={refreshing}
        onRefresh={handleRefresh}
        onEndReached={loadMore}
        onEndReachedThreshold={0.5}
        ListFooterComponent={
          loadingMore ? (
            <ActivityIndicator
              size="large"
              color="#2563EB"
              style={{ marginVertical: 20 }}
            />
          ) : null
        }
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
