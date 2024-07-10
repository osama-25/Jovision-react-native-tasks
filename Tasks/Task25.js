import React, { useRef, useState, forwardRef, useImperativeHandle, Component } from "react"
import { Text, TextInput, View, StyleSheet } from "react-native"

class MyClassPage extends Component{
    constructor(){
      super();
       this.state = {
        text: '', // State to hold the text
       };
    }
    updateText = (newText) => {
    this.setState({ text: newText });
    };
    render(){
      return(
        <Text>{this.state.text}</Text>
      );
    }
}
const Task25 = () => {
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
            <MyClassPage ref={childref}/>
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
export default Task25