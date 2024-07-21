import React, { useRef, useState } from "react"
import { FlatList, Image, Pressable, Alert, View, StyleSheet, Button, TextInput, TouchableOpacity } from "react-native"
import CustomAlert from "../Components/Alert-Input";
import Icon from 'react-native-vector-icons/Ionicons';

const Task28 = () => {
    const [jsonData, setjsonData] = useState([
        { key: 1, src: require('../Resources/0.jpeg') },
        { key: 2, src: require('../Resources/1.jpeg') },
        { key: 3, src: require('../Resources/2.jpeg') },
        { key: 4, src: require('../Resources/3.jpeg') },
        { key: 5, src: require('../Resources/4.jpg') },
        { key: 6, src: require('../Resources/5.jpg') },
        { key: 7, src: require('../Resources/6.jpg') },
        { key: 8, src: require('../Resources/7.jpg') },
        { key: 9, src: require('../Resources/8.jpg') },
        { key: 10, src: require('../Resources/9.jpeg') }
    ]);
    const removeItem = (index) => {
        const updatedArray = jsonData.filter((item, i) => i !== index);
        setjsonData(updatedArray);
    };
    const addItem = (index) => {
        setjsonData([...jsonData, jsonData[index]]);
    };
    const imageData = jsonData.map((item) => ({
        id: item.id,
        source: item.src
    }));
    const Item = ({ item, onPress, removePress, dupPress }) => (
        <Pressable onPress={onPress}>
            <View style={styles.view}>
                <Icon name="add-outline" size={40} color="red" onPress={dupPress} />
                <Icon name="close-outline" size={40} color="red" onPress={removePress} />
            </View>
            <Image
                style={styles.image}
                source={item.source}
            />
        </Pressable>
    );

    const flatListRef = useRef(null);
    const [isModalVisible, setModalVisible] = useState(false);

    const ShowIndex = (index) => {
        Alert.alert(
            'Image Selected',
            `You have selected image ${index + 1}`,
            [{ text: 'OK', onPress: () => console.log('OK Pressed') }],
            { cancelable: true }
        )
    }
    const renderItem = ({ item, index }) => {
        return (
            <Item
                item={item}
                onPress={() => { ShowIndex(index) }}
                removePress={() => { removeItem(index) }}
                dupPress={() => { addItem(index)}}
            />
        );
    };

    const GoToMethod = (index) => {
        if (index < 0 || index > jsonData.length) return;
        if (flatListRef.current) {
            index--;
            flatListRef.current.scrollToIndex({ index, viewPosition: 1, });
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
        marginTop: 15,
        height: 250,
        width: 400,
        zIndex: -1,
    },
    view: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        position: 'absolute',
        top: 20,
        width: '100%',
    },
});
export default Task28