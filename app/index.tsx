import Error from "@/components/common/Error";
import Header from "@/components/common/Header";
import Loading from "@/components/common/Loading";
import MovieCard from "@/components/movie/MovieCard";
import { useTrendingMovies } from "@/hooks/useTrendingMovies";
import { Link } from "expo-router";
import { FlatList, StyleSheet, Text, View } from "react-native";

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
      <Link href={"/search"}>
        <Text>Search</Text>
      </Link>
      <FlatList
        data={data}
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
