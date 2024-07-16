import React, { useState } from "react"
import { Modal, View, Text, TextInput, Button, StyleSheet, TouchableWithoutFeedback } from 'react-native';

const CustomAlert = ({ visible, onClose, onSubmit }) => {
    const [inputText, setInputText] = useState('');

    return (
        <Modal
            transparent={true}
            visible={visible}
            animationType="fade"
            onRequestClose={onClose}
        >
            <TouchableWithoutFeedback onPress={() => { setInputText(''); onClose();}}>
            <View style={styles.modalOverlay}>
                <View style={styles.modalContent}>
                    <Text style={styles.modalTitle}>Enter image index</Text>
                    <TextInput
                        style={styles.textInput}
                        value={inputText}
                        onChangeText={setInputText}
                    />
                    <View style={styles.buttonContainer}>
                        <Button
                            title="Cancel"
                            onPress={() => {
                                setInputText('');
                                onClose();
                            }} 
                        />
                        <Button
                            title="Submit"
                            onPress={() => {
                                setInputText('');
                                onSubmit(inputText);
                                onClose();
                            }}
                        />
                    </View>
                </View>
            </View>
            </TouchableWithoutFeedback>
        </Modal>
    );
};

const styles = StyleSheet.create({
    modalOverlay: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    modalContent: {
        width: 300,
        padding: 20,
        backgroundColor: 'white',
        borderRadius: 10,
        alignItems: 'center',
    },
    modalTitle: {
        fontSize: 18,
        marginBottom: 10,
        color: 'black',
    },
    textInput: {
        width: '100%',
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 20,
        paddingHorizontal: 10,
        color: 'black',
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
    },
});

export default CustomAlert;