import React from "react";
import { SafeAreaView, StyleSheet, View } from 'react-native';
import CardList from "./components/CardList";
// import { Constants }from 'expo';

const items = [  // dummy data for testing.
  { id: 0, author: 'Bob Ross' },
  { id: 1, author: 'Chuck Norris' },
  ];
  

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <CardList items={items}/>
    </SafeAreaView>
  );
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});



