import RecommendationList from "@/components/search/RecommendationList";
import SearchBar from "@/components/search/SearchBar";
import SearchResults from "@/components/search/SearchResults";
import React, { useState } from "react";
import { StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function SearchScreen() {
  const [query, setQuery] = useState("");

  const isSearching = query.trim().length > 0;

  return (
    <SafeAreaView style={styles.container}>
      <SearchBar query={query} setQuery={setQuery} />

      {isSearching ? <SearchResults query={query} /> : <RecommendationList />}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
  },
});
