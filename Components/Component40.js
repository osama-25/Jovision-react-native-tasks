import React, { Component } from "react";
import { StyleSheet, TextInput } from "react-native";
import { connect } from "react-redux";
import { setText } from "./store";

class Component40 extends Component {
    handleTextChange = (text) => {
        this.props.setText(text);
    };
    render() {
        return (
            <TextInput
                style={styles.input}
                value={this.props.text}
                onChangeText={this.handleTextChange}
            />
        )
    }
}
const mapStateToProps = (state) => ({
    text: state.text,
});

const mapDispatchToProps = {
    setText,
};
const styles = StyleSheet.create({
    input: {
        width: 300,
        height: 50,
        borderWidth: 2,
        padding: 10,
        borderRadius: 10,
        color: 'black',
    },
});
export default connect(mapStateToProps, mapDispatchToProps)(Component40);