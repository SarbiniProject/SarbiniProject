import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { WebView } from 'react-native-webview'; 

const Chat = () => {
  return (
    <WebView
    source={{ uri: 'https://tawk.to/chat/65b2f1490ff6374032c4ff89/1hl1ft2eb' }}
    domStorageEnabled={true}
  />
  
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default Chat;

  