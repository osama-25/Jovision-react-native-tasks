import React from "react";
import { Button, StyleSheet, View } from "react-native";
import Component40 from "../Components/Component40";
import { useDispatch, useSelector } from "react-redux";
import { toggleComponentOne } from "../Components/store";

const Task40 = () => {
    const isComponentOneVisible = useSelector(state => state.isComponentOneVisible);
    const dispatch = useDispatch();
    return(
        <View style={styles.container}>
            {isComponentOneVisible && <Component40/>}
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
export default Task40