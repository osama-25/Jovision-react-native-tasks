import React from "react";
import { RefreshControl, ScrollView, StyleSheet, Text, View } from "react-native";

function generateRandomWord(length) {
    let result = '';
    const characters = 'abcdefghijklmnopqrstuvwxyz';
    for (let i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return result;
}
const Task36 = () => {
    const [refreshing, setRefreshing] = React.useState(false);

    const onRefresh = React.useCallback(() => {
        setRefreshing(true);
        setTimeout(() => {
            setRefreshing(false);
        }, 2000);
    }, []);

    const array = [];
    for (i = 0; i < 100; i++) array[i] = generateRandomWord(5);

    return (
        <View style={styles.container}>
            <ScrollView refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh}/>}>
                {array.map((item, index) => (
                    <Text key={index} style={styles.text}>
                        {item}
                    </Text>
                ))}
            </ScrollView>
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
        padding: 20,
    },
    text: {
        fontSize: 20,
        marginBottom: 20,
        color: 'black',
        fontWeight: 'bold',
    },
});
export default Task36