import React, { useRef, useState } from "react"
import { FlatList, Image, Pressable, Alert, View, StyleSheet, Button, TextInput } from "react-native"
import CustomAlert from "../Components/Alert-Input";

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
    const flatListRef = useRef(null);
    const [isModalVisible, setModalVisible] = useState(false);

    const ShowIndex = (index) => {
        Alert.alert(
            'Image Selected',
            `You have selected image ${index + 1}`,
            [{ text: 'OK', onPress: () => console.log('OK Pressed') }],
            {cancelable: true}
        )
    }
    const renderItem = ({ item, index }) => {
        return (
            <Item
                item={item}
                onPress={() => { ShowIndex(index) }}
            />
        );
    };

    const GoToMethod = (index) => {
        if(flatListRef.current){
            index--;
            flatListRef.current.scrollToIndex({index, viewPosition: 1,});
        }
    }
    return (
        <View>
            <Button title={'Go To'} onPress={() => setModalVisible(true)} />
            <CustomAlert
                visible={isModalVisible}
                onClose={() => setModalVisible(false)}
                onSubmit={GoToMethod}
            />
            <FlatList
                ref={flatListRef}
                data={imageData}
                renderItem={renderItem}
                keyExtractor={item => item.id}
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