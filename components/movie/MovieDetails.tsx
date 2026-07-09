import { IMAGE_BASE_URL } from "@/constants/config";
import { Movie } from "@/types/movie";
import React from "react";
import { Image, Text, View } from "react-native";

interface MovieDetailsProps {
  data: Movie;
}

const MovieDetails = ({ data }: MovieDetailsProps) => {
  return (
    <View>
      <Image
        source={{
          uri: `${IMAGE_BASE_URL}${data.poster_path}`,
        }}
        height={500}
      />
      <Text>{data.title}</Text>
      <Text>{data.overview}</Text>
      <Text>{data.vote_average}</Text>
      <Text>{data.release_date}</Text>
    </View>
  );
};

export default MovieDetails;
