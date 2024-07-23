import React, { useState } from "react";
import { Dimensions, Image, StyleSheet, Text, View } from "react-native";
import Video from "react-native-video";

const { width } = Dimensions.get('window');

const Task32 = () => {
    const [paused, setPaused] = useState('true');

    const onBuffer = (buffer) => {
        console.log('Buffering...', buffer);
    };
    const videoError = (error) => {
        console.error('Video Error:', error);
    };
    
    return(
        <View style={styles.container}>
            
            <Video
                source={require('../Resources/nature-video.mp4')}
                style={styles.backgroundVideo}
                onBuffer={onBuffer}
                onError={videoError}
                controls={true}
                resizeMode='contain'
                paused={true}
                onLoad={() => setPaused(false)}
            />
            {paused && <Image style={styles.image} source={require('../Resources/nature-video-poster.jpg')}/>}
        </View>
    );
}
var styles = StyleSheet.create({
    image: {
        height: 180,
        width: 400,
    },
    backgroundVideo: {
        position: 'absolute',
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