import React from 'react';
import { FlatList } from 'react-native';
import Card from './Card';
import { getImageFromId } from '../utils/api';

const keyExtractor = ({ id }) => id.toString(); 

export default CardList = ({ items, commentsForItem, onPressComments }) => {

    const renderItem = ({ item: { id, author }}) => {
    
        const comments = commentsForItem[id];
    
        return (<Card fullname={author} image={{uri: getImageFromId(id)}} linkText={`${comments ? comments.length : 0} Comments`} onPressLinkText={() => onPressComments(id)}/>)
    };

    return (
        <FlatList data={items} renderItem={renderItem} keyExtractor={keyExtractor} extraData={commentsForItem}/>
    )
};