import React, { useState } from "react";
import { StyleSheet, TextInput, View } from "react-native";

interface SearchBarProps {
  query: string;
  setQuery: React.Dispatch<React.SetStateAction<string>>;
}

const SearchBar = ({ query, setQuery }: SearchBarProps) => {
  const [onFocus, setOnFocus] = useState(false);
  return (
    <View style={styles.container}>
      <TextInput
        value={query}
        onChangeText={setQuery}
        placeholder="Search for a movie..."
        placeholderTextColor={"#888"}
        style={[
          styles.searchInput,
          onFocus ? styles.inputFocused : styles.inputBlurred,
        ]}
        onBlur={() => setOnFocus(false)}
        onFocus={() => setOnFocus(true)}
      />
    </View>
  );
};

export default SearchBar;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    alignItems: "center",
    paddingVertical: 10,
  },

  searchInput: {
    width: "90%",
    height: 50,
    borderRadius: 12,
    paddingHorizontal: 16,
    fontSize: 16,
    color: "#111",
    borderWidth: 1.5,
    elevation: 10,
  },

  inputBlurred: {
    borderColor: "#757373",
    backgroundColor: "#f5f5f5",
  },

  inputFocused: {
    borderColor: "#3742e0", // Vibrant accent color instead of harsh pure red
    backgroundColor: "#fff", // Shifts white to show active typing state
    shadowOpacity: 0.15,
  },
});
