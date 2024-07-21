import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Video from "react-native-video";

const onBuffer = (buffer) => {
    console.log('Buffering...', buffer);
};

const videoError = (error) => {
    console.error('Video Error:', error);
};
const Task32 = () => {
    return(
        <View style={styles.container}>
            <Video
                source={require('../Resources/nature-video.mp4')}
                style={styles.backgroundVideo}
                onBuffer={onBuffer}
                onError={videoError}
                repeat={true}
            />
        </View>
    );
}
var styles = StyleSheet.create({
    backgroundVideo: {
      position: 'absolute',
      top: 0,
      left: 0,
      bottom: 0,
      right: 0,
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
});
export default Task32