import React, { useState } from "react";
import { StyleSheet, TextInput, View } from "react-native";

interface SearchBarProps {
  query: string;
  setQuery: React.Dispatch<React.SetStateAction<string>>;
}

const SearchBar = ({ query, setQuery }: SearchBarProps) => {
  const [focused, setFocused] = useState(false);

  return (
    <View style={styles.container}>
      <View
        style={[
          styles.searchContainer,
          focused && styles.searchContainerFocused,
        ]}
      >
        <TextInput
          value={query}
          onChangeText={setQuery}
          placeholder="Search your favourite movie..."
          placeholderTextColor="#888"
          style={styles.input}
          autoCorrect={false}
          autoCapitalize="none"
          returnKeyType="search"
          clearButtonMode="while-editing"
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
        />
      </View>
    </View>
  );
};

export default SearchBar;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    paddingVertical: 12,
  },

  searchContainer: {
    backgroundColor: "#F6F6F6",
    borderRadius: 16,
    borderWidth: 1,
    borderColor: "#DDD",
    elevation: 2,
  },

  searchContainerFocused: {
    borderColor: "#2E7D32",
  },

  input: {
    height: 52,
    paddingHorizontal: 18,
    fontSize: 16,
    color: "#222",
  },
});
