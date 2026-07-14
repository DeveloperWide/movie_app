import React, { useCallback, useState } from "react";
import { Alert, Button, StyleSheet, View } from "react-native";
import YoutubePlayer from "react-native-youtube-iframe";

interface VideoPlayerProps {
  id: string;
}

const VideoPlayer = ({ id }: VideoPlayerProps) => {
  const [playing, setPlaying] = useState(false);

  const onStateChange = useCallback((state) => {
    if (state === "ended") {
      setPlaying(false);
      Alert.alert("video has finished playing!");
    }
  }, []);

  const togglePlaying = useCallback(() => {
    setPlaying((prev) => !prev);
  }, []);

  return (
    <View>
      <YoutubePlayer
        height={300}
        play={playing}
        videoId={"iee2TATGMyI"}
        onChangeState={onStateChange}
      />
      <Button title={playing ? "pause" : "play"} onPress={togglePlaying} />
    </View>
  );
};

export default VideoPlayer;

const styles = StyleSheet.create({});
