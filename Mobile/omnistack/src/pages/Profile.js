import React from 'react';
import { WebView } from 'react-native-webview'

const Profile = ({ navigation }) => {
    const username = navigation.getParam("github_username")
    console.log(username)
    return <WebView style={{ flex: 1 }} source={{ uri: `https://github.com/${username}` }} />
}

export default Profile