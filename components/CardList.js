import React from 'react';
import { FlatList } from 'react-native';
import Card from './Card';
import { getImageFromId } from '../utils/api';

const keyExtractor = ({ id }) => id.toString();

const renderItem = ({ item: { id, author } }) => (
    <Card fullname={author} image={{uri: getImageFromId(id)}}/>
);

export default CardList = ({ items }) => {
    return (
        <FlatList data={items} renderItem={renderItem} keyExtractor={keyExtractor}/>
    )
};