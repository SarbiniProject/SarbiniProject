import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { WebView } from 'react-native-webview'; 

const Chat = () => {
  return (
    <View style={styles.container}>
      <WebView source={{ uri: 'https://tawk.to/chat/64db750694cf5d49dc6a85ab/1h7sk28c6' }} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default Chat;

  