import React, { useState } from "react";
import { Button, StyleSheet, TextInput, View } from "react-native";
import Component39 from "../Components/Component-39";
import { useDispatch, useSelector } from "react-redux";
import { toggleComponentOne } from "../Components/store";

const Task39 = () => {
    const isComponentOneVisible = useSelector(state => state.isComponentOneVisible);
    const dispatch = useDispatch();
    return (
        <View style={styles.container}>
            {isComponentOneVisible && <Component39/>}
            <Button
                title={'Hide/Show'}
                onPress={() => dispatch(toggleComponentOne())}
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
});
export default Task39