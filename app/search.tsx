import RecommendationList from "@/components/search/RecommendationList";
import SearchBar from "@/components/search/SearchBar";
import SearchResults from "@/components/search/SearchResults";
import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";

const search = () => {
  const [query, setQuery] = useState("");

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Search Movies</Text>
      <SearchBar query={query} setQuery={setQuery} />

      {query.trim() === "" ? (
        <RecommendationList />
      ) : (
        <SearchResults query={query} />
      )}
    </View>
  );
};

export default search;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    alignItems: "center",
    paddingVertical: 10,
  },

  heading: {
    fontSize: 23,
    fontWeight: "800",
    paddingVertical: 10,
  },
});
