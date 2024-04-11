import React from "react";
import { SafeAreaView, StyleSheet, View, Platform } from 'react-native';
import Constants from 'expo-constants';
import Feed from "./screens/Feed";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Feed style={styles.feed}/>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  feed: {
    flex: 1,
    marginTop: Platform.OS === 'android' ? Constants.statusBarHeight : 0,
  }
});



