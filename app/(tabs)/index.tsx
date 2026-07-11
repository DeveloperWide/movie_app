import Error from "@/components/common/Error";
import Header from "@/components/common/Header";
import Loading from "@/components/common/Loading";
import MovieCard from "@/components/movie/MovieCard";
import { useTrendingMovies } from "@/hooks/useTrendingMovies";
import { FlatList, StyleSheet, View } from "react-native";

export default function Index() {
  const { data, isLoading, error } = useTrendingMovies();

  if (isLoading) {
    return <Loading />;
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
        contentContainerStyle={{
          paddingBottom: 30,
        }}
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
});
