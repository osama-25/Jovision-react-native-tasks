import React, { useState } from "react"
import { FlatList, Image, Pressable, Alert, View, StyleSheet } from "react-native"

const jsonData = {
    1: require('../Resources/0.jpeg'),
    2: require('../Resources/1.jpeg'),
    3: require('../Resources/2.jpeg'),
    4: require('../Resources/3.jpeg'),
    5: require('../Resources/4.jpg'),
    6: require('../Resources/5.jpg'),
    7: require('../Resources/6.jpg'),
    8: require('../Resources/7.jpg'),
    9: require('../Resources/8.jpg'),
    10: require('../Resources/9.jpeg')
};
const imageData = Object.keys(jsonData).map(key => ({
  id: key,
  source: jsonData[key]
}));
const Item = ({ item, onPress }) => (
    <Pressable onPress={onPress}>
        <Image
            style={styles.image}
            source={item.source}
        />
    </Pressable>
);
const Task28 = () => {
    const [imageIndex, setIndex] = useState(0);
    const HandleAlert = (index) => {
        Alert.alert(
            'Image Selected',
            `You have selected image ${index + 1}`,
            [{ text: 'OK', onPress: () => console.log('OK Pressed') }]
        )
    }

    const renderItem = ({ item, index }) => {

        return (
            <Item
                item={item}
                onPress={() => { HandleAlert(index) }}
            />
        );
    };
    return (
        <View>
            <FlatList
                data={imageData}
                renderItem={renderItem}
                keyExtractor={item => item.id}
                extraData={imageIndex}
            />
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    image: {
        marginTop: 50,
        height: 300,
        width: 400,
    },
});
export default Task28