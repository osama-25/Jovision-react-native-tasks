import React, { Component, useState, useEffect } from "react"
import { Text, View, StyleSheet, Button } from "react-native";

const MyFunctionPage = () => {
    useEffect(() => {
      console.log('Component Loaded')
      return () => {
         console.log('Component unloaded')
      };
    }, []);

    return (
      <Text>Custom Functional Component</Text>
    );
}
const Task21 = () => {
    const titles = ["Show", "Hide"];
    const [titleIndex, setTitleIndex] = useState(0);
    const [showText, setshowText] = useState(false);
    const handlePress = () => {
        setshowText(!showText);
        setTitleIndex((titleIndex + 1) % titles.length);
    }
    return (
        <View style={styles.container}>
            <Button title={titles[titleIndex]} onPress={handlePress}></Button>
            {showText && <MyFunctionPage/>}
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
    text: {
      marginTop: 10,
      fontSize: 16,
      color: '#333333',
    },
    name: {
      fontSize: 24,
      color: '#333333',
    },
  });
export default Task21