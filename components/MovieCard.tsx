import React from "react";
import { Text, View } from "react-native";

interface MovieCardProps {
  title: string;
  rating: number;
}

const MovieCard = ({ title, rating }: MovieCardProps) => {
  return (
    <View>
      <Text>{title}</Text>
      <Text>{rating}</Text>
    </View>
  );
};

export default MovieCard;
