import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function Avatar ({size, initials, backgroundColor }) {
    const style = {
        width: size,
        height: size,
        borderRadius: size/2,
        backgroundColor,
    }

    return (
        <View style={[style, styles.container]}>
            <Text style={styles.text}>{initials}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        alignItems: "center",
        justifyContent: "center"
    },
    text: {
        color: "white",
    }
})