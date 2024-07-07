import React, { useState } from "react"
import {View, Button, Text} from "react-native"
const Task16 = () => {
    const [showText, setshowText] = useState(false);
    const handlePress = () => {
        setshowText(!showText);
    }
    return (
        <View>
            <Button title="Press Me!" onPress={handlePress}></Button>
            {showText && <Text>Osama</Text>}
        </View>
    );
}
export default Task16