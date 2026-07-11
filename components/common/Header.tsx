import React from "react";
import { StyleSheet, Text, View } from "react-native";

const Header = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.logo}>🎬</Text>

      <View>
        <Text style={styles.title}>Movie Explorer</Text>

        <Text style={styles.subtitle}>Discover trending movies</Text>
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },

  logo: {
    fontSize: 36,
    marginRight: 12,
  },

  title: {
    fontSize: 24,
    fontWeight: "800",
    color: "#222",
  },

  subtitle: {
    fontSize: 14,
    color: "#777",
    marginTop: 2,
  },
});
