import React, { useEffect, useRef } from 'react';
import { View, Image, Text, StyleSheet, ImageBackground ,Dimensions, Animated } from "react-native";
import {useNavigation } from '@react-navigation/native';

export default  Loading=()=> {
  const navigation = useNavigation();

  const fadeAnim = useRef(new Animated.Value(0)).current;

  const screenWidth = Dimensions.get('window').width;
  const imageWidth = screenWidth * 0.4; 

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 1500, 
      useNativeDriver: true,
    }).start();
  }, [fadeAnim]);


  return (
    <View style={styles.container}>
      <ImageBackground
        resizeMode="cover"
        source={{
          uri: "https://cdn.builder.io/api/v1/image/assets/TEMP/a0edf1ad3d32b573aac9090e5d85e58f1cf9d81d8cef030e2368b9d18b776096?",
        }}
        style={styles.image1}
      >
        <Image
          resizeMode="contain"
          source={{
            uri: "https://cdn.builder.io/api/v1/image/assets/TEMP/deb64aa39ada157a109f92f649bdb2cdd1d12997c62fb55618344a054482b05f?",
          }}
          style={styles.image2}
        />
        <Image
          resizeMode="contain"
          source={{
            uri: "https://cdn.builder.io/api/v1/image/assets/TEMP/deb64aa39ada157a109f92f649bdb2cdd1d12997c62fb55618344a054482b05f?",
          }}
          style={styles.image3}
        />
        <Image
          resizeMode="contain"
          source={{
            uri: "https://cdn.builder.io/api/v1/image/assets/TEMP/deb64aa39ada157a109f92f649bdb2cdd1d12997c62fb55618344a054482b05f?",
          }}
          style={styles.image4}
        />
        <View style={styles.view1}>
          <Text>Loading ...</Text>
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "stretch",
    overflow: "hidden",
    position: "relative",
    flexDirection: "column",
    margin: 0,
    padding: 0,
    shadowColor: "#060622",
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.4,
    shadowRadius: 50,
    elevation: 5,
  },
  image1: {
    aspectRatio: 0.46,
    maxWidth: 480,
    width: "100%",
  },
  image2: {
    marginTop: 50,
    aspectRatio: 0.1,
  },
  image3: {
    marginTop: 50,
    aspectRatio: 0.97,
  },
  image4: {
    marginTop: 50,
    aspectRatio: 0.97,
  },
  view1: {
    color: "#FFF",
    textAlign: "center",
    position: "absolute",
    bottom: 20,
    left: 0,
    right: 0,
  },
});
