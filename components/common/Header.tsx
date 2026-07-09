import React from "react";
import { StyleSheet, Text, View } from "react-native";

const Header = () => {
  return (
    <View>
      <Text style={styles.text}>🎬 Movie App</Text>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  text: {
    fontSize: 24,
    fontWeight: "900",
    paddingVertical: 10,
  },
});
