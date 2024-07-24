import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { useEffect, useState } from "react";
import { Alert, Button, StyleSheet, Text, TextInput, View } from "react-native";

const STORAGE_KEY = 'user_Info';

const Task35 = () => {
    const [name, setName] = useState('');
    const [age, setAge] = useState();
    const [country, setCountry] = useState();

    const loadStoredData = async () => {
        try {
            const storedData = await AsyncStorage.getItem(STORAGE_KEY);
            if (storedData) {
                const parsedData = JSON.parse(storedData);
                const timestamp = new Date(parsedData.timeStamp);
                const now = new Date();
                console.log(parsedData.timeStamp);
                console.log(now);
                // Check if the timestamp is less than one minute old
                if ((now - timestamp) / 1000 < 60) {
                    setName(parsedData.name);
                    setAge(parsedData.age);
                    setCountry(parsedData.country);
                    console.log("success");
                }
            }
        } catch (error) {
            console.error('Failed to load data from storage:', error);
        }
    };
    useEffect(() => {
        loadStoredData();
    }, []);

    HandleSubmit = async () => {
        const userInfo = {
            name,
            age,
            country,
            timeStamp: new Date(),
        };
        try {
            await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(userInfo));
            Alert.alert('Success', 'Data saved successfully');
        } catch (error) {
            console.error('Failed to save data to storage:', error);
            Alert.alert('Error', 'Failed to save data');
        }
    }

    return (
        <View style={styles.container}>
            <Text style={styles.text}>Form</Text>
            <TextInput
                style={styles.input}
                placeholder='Name'
                placeholderTextColor='grey'
                onChangeText={setName}
                value={name}
            />
            <TextInput
                style={styles.input}
                placeholder="Age"
                placeholderTextColor='grey'
                onChangeText={setAge}
                keyboardType="numeric"
                value={age}
            />
            <TextInput
                style={styles.input}
                placeholder="Country"
                placeholderTextColor='grey'
                onChangeText={setCountry}
                value={country}
            />
            <Button title={'Submit'} onPress={HandleSubmit} />
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
    input: {
        width: 300,
        marginBottom: 20,
        height: 50,
        borderWidth: 2,
        padding: 10,
        borderRadius: 10,
        color: 'black',
    },
    text: {
        fontSize: 60,
        marginBottom: 20,
        color: 'black',
        fontWeight: 'bold',
    },
});
export default Task35