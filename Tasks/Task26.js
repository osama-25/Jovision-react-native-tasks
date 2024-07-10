import React, { useState } from "react"
import { Button, Text, View, StyleSheet, ActivityIndicator } from "react-native"

const Task26 = () => {
    const [text, setText] = useState('hi');
    const [Loading, setLoading] = useState(false);
    const HandleBlock = async () => {
        setLoading(true);
        try {
            const response = await fetch("https://api.ipify.org?format=json");
            const data = await response.json();
            setText(data.ip);
        } catch (e) {
            console.error(e);
        }
        setLoading(false);
    }
    const HandleNonBlock = () => {
        fetch("https://api.ipify.org?format=json")
        .then(resp => resp.json())
        .then(data => setText(data.ip))
        .catch(e => console.error(e))
    }
    return(
        (Loading ? <ActivityIndicator size="large" color="#0000ff" /> : 
        <View style={styles.container}>
            <Button title={'Blocking'} onPress={HandleBlock}></Button>
            <Button title={'Non-Blocking'} onPress={HandleNonBlock}></Button>
            <Text style={styles.text}>{text}</Text>
        </View>
        )
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
  });
export default Task26