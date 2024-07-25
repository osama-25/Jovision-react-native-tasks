import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import Component2 from "../Components/Component2";

const Task38 = () => {
    const [text, setText] = useState();
    return(
        <View style={styles.container}>
            <Component2 text={text} onchangetext={setText}/>
            <Component2 text={text} onchangetext={setText}/>
            <Component2 text={text} onchangetext={setText}/>
            <Component2 text={text} onchangetext={setText}/>
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
});
export default Task38