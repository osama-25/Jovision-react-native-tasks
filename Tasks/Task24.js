import React, { useRef, useState, forwardRef, useImperativeHandle } from "react"
import { Text, TextInput, View, StyleSheet } from "react-native"

const MyFunctionPage = forwardRef(function MyInput(props, ref) {
    const [text, setText] = useState('hi');
    useImperativeHandle(ref, () => ({
      updateText(newText){
        setText(newText);
      }
    }));
    return (
        <Text>{text}</Text>
    );
});
const Task24 = () => {
    const childref = useRef(null);

    const HandleText = (text) => {
      if(childref.current){
        childref.current.updateText(text);
      }
    }
    return (
        <View style={styles.container}>
            <TextInput
              style={styles.input}
              onChangeText={HandleText}
              placeholder={'type here'}
            />
            <MyFunctionPage ref={childref}/>
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
export default Task24