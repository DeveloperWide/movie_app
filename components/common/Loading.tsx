import React from "react";
import { ActivityIndicator, StyleSheet, Text, View } from "react-native";

interface LoadingProps {
  loadingMsg: string;
}

const Loading = ({ loadingMsg }: LoadingProps) => {
  return (
    <View style={styles.container}>
      <ActivityIndicator size="large" color="#2E7D32" />

      <Text style={styles.text}>{loadingMsg}</Text>
    </View>
  );
};

export default Loading;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  text: {
    marginTop: 14,
    fontSize: 16,
    color: "#666",
  },
});
