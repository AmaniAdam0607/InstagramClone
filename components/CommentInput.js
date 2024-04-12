import React, { useState } from 'react';
import { StyleSheet, TextInput, View } from 'react-native';

export default CommentInput = ({ onSubmit, placeholder }) => {
    const [ text, setText ] = useState("");

    const handleOnSubmit = () => {

        if (!text) return;

        onSubmit(text);
        setText("");
    };

    const handleChangeText = (text) => {
        setText(text);
    };

    return (
        <View style={styles.container}>
            <TextInput 
                style={styles.input}
                value={text}
                placeholder={placeholder}
                underlineColorAndroid="transparent"
                onChangeText={handleChangeText}
                onSubmitEditing={handleOnSubmit}
                />
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        borderBottomWidth: StyleSheet.hairlineWidth,
        borderBottomColor: "rgba(0,0,0,0.1)",
        paddingHorizontal: 20,
        height: 60
    },
    input: {
        flex: 1
    }
})