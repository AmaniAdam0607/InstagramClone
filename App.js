import React from "react";
import Card from "./components/Card";
import { SafeAreaView, StyleSheet, View } from 'react-native';
// import { Constants }from 'expo';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Card fullname={'Magreth Fransis'} linkText={"Comments"} onPressLinkText={() => {/** */}} image={{uri: "https://picsum.photos/600/600"}}/>
    </SafeAreaView>
  );
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});



