import React from 'react';
import { View, ScrollView, StyleSheet, Text } from 'react-native';

export default CommentList = ({ items }) => {


    const renderItem = ( item, index ) => {

        const _comments = []

        _comments.push(<View key={index} style={styles.comment}>
            <Text>{item}</Text>
        </View>)

        return _comments;
    }

    return (
        <ScrollView>
            {items.map(renderItem)}
        </ScrollView>
    )
};

const styles = StyleSheet.create({
    comment: {
        marginLeft: 20,
        paddingVertical: 20,
        paddingRight: 20,
        borderBottomWidth: StyleSheet.hairlineWidth,
        borderBottomColor: 'rgba(0,0,0,0.05)'
    }
})