import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setText } from "./store";
import { StyleSheet, TextInput } from "react-native";

const Component39 = () => {
    const text = useSelector(state => state.text);
    const dispatch = useDispatch();
    return(
        <TextInput
            style={styles.input}
            value={text}
            onChangeText={text => dispatch(setText(text))}
        />
    );
}
const styles = StyleSheet.create({
    input: {
        width: 300,
        height: 50,
        borderWidth: 2,
        padding: 10,
        borderRadius: 10,
        color: 'black',
    },
});
export default Component39