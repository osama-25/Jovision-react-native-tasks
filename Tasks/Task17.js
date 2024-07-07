import React, { useState } from "react"
import {View, Button, Text} from "react-native"
const Task17 = () => {
    const titles = ["Show", "Hide"];
    const [titleIndex, setTitleIndex] = useState(0);
    const [showText, setshowText] = useState(false);
    const handlePress = () => {
        setshowText(!showText);
        setTitleIndex((titleIndex + 1) % titles.length);
    }
    return (
        <View>
            <Button title={titles[titleIndex]} onPress={handlePress}></Button>
            {showText && <Text>Osama</Text>}
        </View>
    );
}
export default Task17