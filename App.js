import React, { useState } from "react";
import { SafeAreaView, StyleSheet, Modal , Platform } from 'react-native';
import Constants from 'expo-constants';
import Feed from "./screens/Feed";
import Comments from "./screens/Comments";

export default function App() {

  const [ commentsForItem, setCommentsForItem ] = useState({});
  const [ showModal, setShowModel ] = useState(false);
  const [ selectedItemId, setSelectedItemId ] = useState(null);

  const openCommentsScreen = id => {
    setShowModel(true);
    setSelectedItemId(id);
  };

  const closeCommentsScreen = () => {
    setShowModel(false);
    setSelectedItemId(null);
  };

  const onSubmitComment = (text) => {
    const comments = commentsForItem[selectedItemId] || [];

    const updated = {
      ...commentsForItem,
      [selectedItemId]: [...comments, text],
    }

    setCommentsForItem(updated);
  }

  return (
    <SafeAreaView style={styles.container}>
      <Feed style={styles.feed} commentsForItem={commentsForItem} onPressComments={openCommentsScreen}/>
      <Modal visible={showModal} animationType="slide" onRequestClose={closeCommentsScreen}>
        <Comments style={styles.container} comments={commentsForItem[selectedItemId] || []} onClose={closeCommentsScreen} onSubmitComment={onSubmitComment}/>
      </Modal>
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



