import { ActivityIndicator, StyleSheet, View } from "react-native";

const Loading = () => {
  return (
    <View style={styles.centerItems}>
      <ActivityIndicator size={"large"} color={"#133"} />
    </View>
  );
};

export default Loading;

const styles = StyleSheet.create({
  centerItems: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
