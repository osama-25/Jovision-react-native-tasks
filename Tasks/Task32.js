import React, { useState } from "react";
import { Dimensions, Image, Pressable, StyleSheet, Text, View } from "react-native";
import Video from "react-native-video";

const { width } = Dimensions.get('window');

const Task32 = () => {
    const [paused, setPaused] = useState(false);

    const onBuffer = (buffer) => {
        console.log('Buffering...', buffer);
    };
    const videoError = (error) => {
        console.error('Video Error:', error);
    };
    const togglePause = () => {
        setPaused(!paused);
    };

    return (
        <View style={styles.container}>
            <Pressable onPress={togglePause}>
                <Video
                    source={require('../Resources/nature-video.mp4')}
                    style={styles.backgroundVideo}
                    onBuffer={onBuffer}
                    onError={videoError}
                    resizeMode='contain'
                    paused={paused}
                    onLoad={() => setPaused(false)}
                    repeat={true}
                />
                {paused && <Image 
                            style={styles.image} 
                            source={require('../Resources/nature-video-poster.jpg')} 
                            />}
            </Pressable>
        </View>
    );
}
var styles = StyleSheet.create({
    image: {
        position: 'absolute',
        width: width,
        height: 180,
        top: 10,
    },
    backgroundVideo: {
        width: width,
        height: (width * 9) / 16,
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
});
export default Task32