import React from 'react';
import { SafeAreaView } from 'react-native';
import NavigationBar from '../components/NavigationBar';
import CommentInput from '../components/CommentInput';
import CommentList from '../components/CommentList';

export default Comments = ({ comments, onClose, onSubmitComment, style }) =>{
    return (
        <SafeAreaView style={style}>
            <NavigationBar title={"Comments"} leftText={"Close"} onPressLeftText={onClose}/>
            <CommentInput placeholder={"Leave a comment"} onSubmit={onSubmitComment}/>
            <CommentList items={comments}/>
        </SafeAreaView>
    )
};