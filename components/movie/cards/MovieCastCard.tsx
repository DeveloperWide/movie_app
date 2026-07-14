import { IMAGE_BASE_URL } from "@/constants/config";
import { Cast } from "@/types";
import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";

interface MovieCastCardProps {
  data: Cast;
}

const MovieCastCard = ({ data }: MovieCastCardProps) => {
  console.log(data);
  return (
    <View style={styles.container}>
      <Image
        source={{ uri: `${IMAGE_BASE_URL}${data.profile_path}` }}
        style={styles.circleImage}
      />
      <Text style={styles.name}>{data.name}</Text>
      <Text numberOfLines={2} style={styles.character}>
        {data.character ? `(${data.character})` : ""}
      </Text>
    </View>
  );
};

export default MovieCastCard;

const styles = StyleSheet.create({
  circleImage: {
    height: 100,
    width: 100,
    borderRadius: 999,
  },

  container: {
    marginHorizontal: 5,
    marginVertical: 4,
    width: 150,
    justifyContent: "center",
    alignItems: "center",
  },

  name: {
    fontWeight: "600",
    fontSize: 16,
    paddingVertical: 2,
  },

  character: {
    flexWrap: "wrap",
  },
});
