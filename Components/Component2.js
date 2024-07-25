import React, { useState } from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";
import Component1 from "./Component1";
import { LevelContext } from "./LevelContext";

const Component2 = ({text, onchangetext}) => {
    return(
        <View style={styles.container}>
            <LevelContext.Provider value={text}>
               <Component1/> 
            </LevelContext.Provider>
            <TextInput
                style={styles.input}
                onChangeText={onchangetext}
            />
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        width: '100%',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    input: {
        width: 300,
        height: 50,
        borderWidth: 2,
        padding: 10,
        borderRadius: 10,
        color: 'black',
    },
});
export default Component2