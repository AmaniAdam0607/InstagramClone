import React, { useState } from 'react';
import { ActivityIndicator, Image, StyleSheet, View } from 'react-native';

import AuthorRow from './AuthorRow';


export default Card = ({ fullname, image, linkText='', onPressLinkText}) => {

    const [loading, setLoading] = useState(true);

    const handleLoad = () => {
        setLoading(false);
        //console.log("Loaded!!");
    };

    return (
    <View>
        <AuthorRow fullname={fullname} linkText={linkText} onPressLinkText={onPressLinkText}/>
        <View style={styles.image}>
            {loading && (
                <ActivityIndicator style={StyleSheet.absoluteFill} size={'large'} />
            )}
            <Image style={StyleSheet.absoluteFill} source={image} onLoad={handleLoad}/>
        </View>
    </View>
    )
};

const styles = StyleSheet.create({
    image: {
        aspectRatio: 1,
        backgroundColor: 'rgba(0,0,0,0.02)',
        height: 400,
    }
})