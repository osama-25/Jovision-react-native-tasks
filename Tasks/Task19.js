import React, { Component, useState } from "react"
import { Text, View, StyleSheet, Button } from "react-native";

class App extends Component {
    render () {
        return (
            <Text>Hello World!</Text>
        )
    }
}
const Task19 = () => {
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
            {showText && <App/>}
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
export default Task19