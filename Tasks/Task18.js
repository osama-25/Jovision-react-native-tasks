import React, { useState, useEffect } from "react"
import { ActivityIndicator, Text, View, StyleSheet } from "react-native";

const Task18 = () => {
    const [swtch, setswtch] = useState(true);
    useEffect(() => {
        const timer = setTimeout(() => {
            setswtch(false);
        }, 5000);

        return () => clearTimeout(timer);
    }, []);
    return (
        <View style={styles.container}>
            {swtch ? (
                <>
                    <ActivityIndicator size="large" />
                    <Text style={styles.text}>Loading...</Text>
                </>
            ) : (
                <Text style={styles.name}>Osama</Text>
            )}
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
    text: {
      marginTop: 10,
      fontSize: 16,
      color: '#333333',
    },
    name: {
      fontSize: 24,
      color: '#333333',
    },
  });
export default Task18