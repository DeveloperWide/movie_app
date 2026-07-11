import { IMAGE_BASE_URL } from "@/constants/config";
import { Movie } from "@/types/movie";
import { formatDate, formatRuntime } from "@/utils/helper";
import React from "react";
import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import FavoritesButton from "../common/FavoritesButton";

interface MovieDetailsProps {
  data: Movie;
}

const MovieDetails = ({ data }: MovieDetailsProps) => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContainer}
      >
        <FavoritesButton movie={data} />
        {/* Backdrop */}
        <Image
          source={{
            uri: `${IMAGE_BASE_URL}${data.backdrop_path}`,
          }}
          style={styles.backdrop}
        />

        {/* Poster + Info */}
        <View style={styles.detailsContainer}>
          <Image
            source={{
              uri: `${IMAGE_BASE_URL}${data.poster_path}`,
            }}
            style={styles.poster}
          />

          <View style={styles.infoContainer}>
            <View style={styles.header}>
              <Text numberOfLines={2} style={styles.title}>
                {data.title}
              </Text>

              <View style={styles.ratingContainer}>
                <Text style={styles.rating}>
                  ⭐ {data.vote_average.toFixed(1)}
                </Text>
              </View>
            </View>

            <View style={styles.genresContainer}>
              {data.genres.map((genre) => (
                <View key={genre.id} style={styles.genreChip}>
                  <Text style={styles.genreText}>{genre.name}</Text>
                </View>
              ))}
            </View>

            <Text style={styles.metaText}>
              <Text style={styles.bold}>Runtime:</Text>{" "}
              {formatRuntime(data.runtime)}
            </Text>

            <Text style={styles.metaText}>
              <Text style={styles.bold}>Release:</Text>{" "}
              {formatDate(data.release_date)}
            </Text>
          </View>
        </View>

        {/* Overview */}

        <View style={styles.overviewContainer}>
          <Text style={styles.sectionTitle}>Overview</Text>

          <View style={styles.divider} />

          <Text style={styles.overview}>{data.overview}</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default MovieDetails;

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#fff",
  },

  scrollContainer: {
    paddingBottom: 30,
  },

  backdrop: {
    width: "100%",
    height: 250,
  },

  detailsContainer: {
    flexDirection: "row",
    marginHorizontal: 16,
    marginTop: -60,
  },

  poster: {
    width: 140,
    height: 210,
    borderRadius: 14,
  },

  infoContainer: {
    flex: 1,
    marginLeft: 14,
    justifyContent: "flex-end",
  },

  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
    marginBottom: 10,
  },

  title: {
    flex: 1,
    fontSize: 24,
    fontWeight: "800",
    marginRight: 8,
    color: "#222",
  },

  ratingContainer: {
    backgroundColor: "#FFE08A",
    paddingHorizontal: 8,
    paddingVertical: 5,
    borderRadius: 8,
  },

  rating: {
    fontWeight: "700",
    color: "#222",
  },

  genresContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    marginBottom: 10,
  },

  genreChip: {
    borderWidth: 1,
    borderColor: "#2E7D32",
    borderRadius: 20,
    paddingHorizontal: 10,
    paddingVertical: 5,
    marginRight: 8,
    marginBottom: 8,
  },

  genreText: {
    color: "#2E7D32",
    fontSize: 13,
    fontWeight: "600",
  },

  metaText: {
    color: "#555",
    fontSize: 15,
    marginBottom: 5,
  },

  bold: {
    fontWeight: "700",
    color: "#222",
  },

  overviewContainer: {
    marginTop: 24,
    paddingHorizontal: 18,
  },

  sectionTitle: {
    fontSize: 24,
    fontWeight: "800",
    color: "#222",
  },

  divider: {
    width: 60,
    height: 3,
    backgroundColor: "#2E7D32",
    marginVertical: 10,
    borderRadius: 10,
  },

  overview: {
    color: "#555",
    fontSize: 16,
    lineHeight: 25,
  },
});
