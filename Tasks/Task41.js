import React from "react";
import { StyleSheet, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Screen1 from "../Components/Screen1";
import Screen2 from "../Components/Screen2";
import Screen3 from "../Components/Screen3";
import Screen4 from "../Components/Screen4";

const Tab = createBottomTabNavigator();
const Task41 = () => {
    return (
        <NavigationContainer>
            <Tab.Navigator>
                <Tab.Screen name="Screen1" component={Screen1} />
                <Tab.Screen name="Screen2" component={Screen2} />
                <Tab.Screen name="Screen3" component={Screen3} />
                <Tab.Screen name="Screen4" component={Screen4} />
            </Tab.Navigator>
        </NavigationContainer>
    );
}
export default Task41