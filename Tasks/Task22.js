import React, { useState } from "react"
import { Text, TextInput, View, StyleSheet } from "react-native"

const MyFunctionPage = ({setText}) => {
    return (
        <TextInput
          style={styles.input}
          onChangeText={newText => setText(newText)}
          placeholder={'Type here'}
      />
    );
}
const Task22 = () => {
    const [text, setText] = useState('hi');
    return (
        <View style={styles.container}>
            <MyFunctionPage setText={setText}/>
            <Text>{text}</Text>
        </View>
    );
}
const styles = StyleSheet.create({
  container: {
      width: 400,
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#F5FCFF',
    },
  input: {
    width: 100,
    height: 40,
    margin: 12,
    borderWidth: 2,
    padding: 10,
  },
});
export default Task22