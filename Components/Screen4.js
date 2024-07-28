import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

const Screen4 = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Screen 4</Text>
            <Button
                title="Go to Screen 2"
                onPress={() => navigation.navigate('Screen2')}
            />
            <Button
                title="Go to Screen 3"
                onPress={() => navigation.navigate('Screen3')}
            />
            <Button
                title="Go to Screen 1"
                onPress={() => navigation.navigate('Screen1')}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'grey',
    },
    text: {
        fontSize: 20,
        color: 'black',
        fontWeight: 'bold',
    },
});

export default Screen4;