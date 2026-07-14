import VideoPlayer from "@/components/VideoPlayer";
import { Video } from "@/types";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

interface MovieTrailerCardProps {
  data: Video;
}

const MovieTrailerCard = ({ data }: MovieTrailerCardProps) => {
  console.log(data.official);
  return (
    <View style={styles.container}>
      <Text>{data.name}</Text>
      <VideoPlayer id={data.key} />
      <Text>{data.official}</Text>
      <Text>{data.site}</Text>
      <Text>{data.type}</Text>
    </View>
  );
};

export default MovieTrailerCard;

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
