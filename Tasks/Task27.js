import React, { useState } from "react"
import { Image, View, Button, StyleSheet, Alert } from "react-native";

const Task27 = () => {
    const images={
      0: require('../Resources/0.jpeg'),
      1: require('../Resources/1.jpeg'),
      2: require('../Resources/2.jpeg')
    };
    const [imageIndex, setIndex] = useState(0);
    const HandleAlert = () => {
      Alert.alert(
        'Image',
        'Choose image',
        [
          {
            text: '1',
            onPress: () => setIndex(0)
          },
          {
            text: '2',
            onPress: () => setIndex(1)
          },
          {
            text: '3',
            onPress: () => setIndex(2)
          }
        ]
      )
    }
    return(
        <View style={styles.container}>
            <Button title={'Change Image'} onPress={HandleAlert}></Button>
            <Image
                style={styles.image}
                source={images[imageIndex]}
            />
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#F5FCFF',
    },
    image: {
      marginTop: 50,
      height: 400,
      width: 400,
    },
  });
export default Task27