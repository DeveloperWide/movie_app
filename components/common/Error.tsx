import React from "react";
import { StyleSheet, Text, View } from "react-native";

interface ErrorProps {
  err: string;
}

const Error = ({ err }: ErrorProps) => {
  return (
    <View style={styles.centerItems}>
      <Text style={styles.err}>{err}</Text>
    </View>
  );
};

export default Error;

const styles = StyleSheet.create({
  err: {
    fontSize: 20,
    color: "red",
  },

  centerItems: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
