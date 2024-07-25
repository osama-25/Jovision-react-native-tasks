import React, { Component, useContext } from "react";
import { StyleSheet, Text } from "react-native";
import { LevelContext } from "./LevelContext";

class Component1 extends Component {
    render () {
        return (
            <LevelContext.Consumer>
                {contextValue => (
                    <Text style={styles.text}>{contextValue}</Text>  
                )}
            </LevelContext.Consumer>
        )
    }
}
const styles = StyleSheet.create({
    text: {
        fontSize: 20,
        color: 'black',
        fontWeight: 'bold',
    },
});
export default Component1