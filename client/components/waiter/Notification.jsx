import React from "react";
import { View, Image, Text, StyleSheet, TouchableOpacity } from "react-native";

export default function Notification() {
  return (
    <View style={styles.view1}>
      <Image
        resizeMode="contain"
        source={require("../../assets/sarbini_black.png")}
        style={styles.image1}
      />
      <View style={styles.view2}>
        <Text style={styles.text1}>Notification sent!</Text>
      </View>
      <View style={styles.view3}>
        <Text style={styles.text2}>We will contact you as soon as possible</Text>
      </View>
      <TouchableOpacity style={styles.view4}>
        <Text style={styles.text3}>Close</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  view1: {
    borderRadius: 30,
    backgroundColor: "#FFFDFD",
    maxWidth: 480,
    width: "78%",
    flexDirection: "column",
    alignItems: "center",
    margin: 50 , // Remove auto
    // marginLeft:60,
    
    padding: 40 ,
    shadowColor: "#060622",
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.4,
    shadowRadius: 50,
    elevation: 5, // for Android
  },
  image1: {
    marginTop: -120,
    width: 1,
    aspectRatio: 0.60,
  },
  view2: {
    marginTop: 0,
  },
  text1: {
    fontWeight: "600",
    fontSize: 36,
  },
  view3: {
    marginTop: 5,
    width: 271,
  },
  text2: {
    fontWeight: "500",
    fontSize: 20,
    textAlign: "center",
  },
  view4: {
    backgroundColor: "#E60012",
    borderRadius: 8,
    alignSelf: "stretch",
    marginTop: 48,
    paddingVertical: 16,
    paddingHorizontal: 60,
  },
  text3: {
    fontWeight: "600",
    fontSize: 18,
    color: "#FFFDFD",
    textAlign: "center",
  },
});
