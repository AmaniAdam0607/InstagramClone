import React, { useEffect, useState } from 'react';
import { ActivityIndicator, Text, SafeAreaView } from 'react-native';
//import Constants from 'expo-constants';
import { fetchImages } from '../utils/api';
import CardList from '../components/CardList';

export default Feed = ({ style }) => {
    const [ loading, setLoading ] = useState(true);
    const [ error, setError ] = useState(false);
    const [ items, setItems ] = useState([]);

    useEffect(() => {
        const fetchAppData = async () =>
        {
            try {
            const items_ = await fetchImages();
            setLoading(false);
            setItems(items_);
        }
            catch (e) {
            setLoading(false);
            setError()
        }
    };
    fetchAppData();
    },[])

    if (loading) {
            return <ActivityIndicator size={"large"}/>
    }

    if (error) {
        return <Text>Error...</Text>
    }

    return (
        <SafeAreaView style={style}>
            < CardList items={items} />
        </SafeAreaView>
    )
};