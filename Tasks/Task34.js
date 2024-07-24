import React, { useEffect, useState } from "react";
import { Button, StyleSheet, Text, View } from "react-native";

const useCurrentTime = () => {
    const [Time, setTime] = useState();
    useEffect(() => {
        var t = setInterval(() => {
            const now = new Date();
            const currentDateTime = now.toLocaleString();
            setTime(currentDateTime);
        }, 1000);
        return () => clearInterval(t); 
    })
    return Time;
}
const Task34 = () => {
    const Time = useCurrentTime();
    return(
        <View style={styles.container}>
            
            <Text style={styles.text}>{Time}</Text>
        </View>
    );
}
var styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    text: {
        fontSize: 20,
        color: '#333333',
    },
});
export default Task34