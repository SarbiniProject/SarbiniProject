import React, { useState } from "react";
import { Text, StyleSheet,TouchableOpacity,View ,TextInput} from "react-native";
import { Image } from "expo-image";
import { Color, FontFamily, FontSize, Border } from "./styles/LoginStyle";
import Cookies from 'js-cookie';
import axios from "axios";
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from '@react-native-async-storage/async-storage';
import safeStringify from 'json-stringify-safe';

const Login = () => {
  const [pseudo, setPseudo] = useState("");
  const [password, setPassword] = useState("");
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const navigation = useNavigation();




 const handleSubmit = async () => {
  try {
    const response = await axios.post('http://172.20.10.3:3000/api/sarbini/signin', {
      user_Pseudo: pseudo,
      user_password: password,
    });

    const { token, id, user_name, user_role } = response.data;

    if (id && token) {
      // Exclude circular references manually
      const cleanedData = {
        id,
        user_name,
        token,
        user_role, // Include other properties as needed
      };

      // Use safeStringify to handle circular references
      const jsonString = safeStringify(cleanedData);

      // Store the token in AsyncStorage
      await AsyncStorage.setItem('authToken', jsonString);

      setErrorMessage('');
      setSuccessMessage('Login successful');

      // Navigate based on user role
      if (user_role === "controller") {
        navigation.navigate('controller', { userId: id });
      } else if (user_role === "waiter") {
        navigation.navigate('Product', { userId: id });
      } else {
        navigation.navigate('Dashboard', { userId: id });
      }
    } else {
      setErrorMessage('Login failed. Please check your credentials.');
    }
  } catch (error) {
    console.error('Error during login:', error);
    setErrorMessage('Error during login. Please try again.');
  }
};
  

  return (
    <View style={styles.login}>
      <View style={[styles.loginTitle, styles.bgLayout]}>
        <Text style={[styles.welcomeBack, styles.login1Typo]}>
          Welcome Back!!!
        </Text>
        <Text style={[styles.login1, styles.login1Typo]}>Login</Text>
      </View>
      <Image
        style={styles.captureDCran20240113081Icon}
        contentFit="cover"
        source={require("../assets/sarbini_black.png")}
      />
      <View style={[styles.input1, styles.inputLayout]}>
        <View style={[styles.bg, styles.bgLayout]} />
        <View style={[styles.label, styles.bg1Layout]}>
          <View style={[styles.bg1, styles.bg1Layout]} />
        </View>
        <TextInput placeholder="Name_ID"  onChange={(text)=>{setPseudo(text)}} style={[styles.placeholder, styles.placeholderTypo]}>
          
        </TextInput>
      </View>
      <View style={[styles.input11, styles.inputLayout]}>
        <View style={[styles.bg, styles.bgLayout]} />
        <View style={[styles.label, styles.bg1Layout]}>
          <View style={[styles.bg1, styles.bg1Layout]} />
        </View>
      </View>
      <Text style={[styles.pseudo, styles.pseudoTypo]}>Pseudo</Text>
      <Text style={[styles.password, styles.pseudoTypo]}>password</Text>
      <TextInput placeholder="Your Password"  onChange={(text)=>{setPassword(text)}} secureTextEntry={true} style={[styles.yourPassword, styles.login2Typo]}>
        
      </TextInput> 
      <View>
      <TouchableOpacity style={styles.btn_login1} onPress={()=>{ navigation.navigate('Dashboard')}}>
        <Text style={styles.btn_login2}>LOGIN</Text>
      </TouchableOpacity>
    </View>
    </View>
  );
};

const styles = StyleSheet.create({
  btn_login1:{
    position:"absolute",
    top:430,
    left:"15%",
    backgroundColor:"brown",
    color:"brown",
    width:250,
    height:60,
    borderRadius:8,
    padding:15,
  },
  btn_login2:{
    textAlign:"center",
    color:"white",
    fontSize:20
  },
  bgLayout: {
    width: 325,
    position: "absolute",
  },
  login1Typo: {
    textAlign: "left",
    color: Color.colorGray,
    fontFamily: FontFamily.segoeUI,
    left: 0,
    position: "absolute",
  },
  inputLayout: {
    height: 69,
    width: 325,
    left: 14,
    position: "absolute",
  },
  bg1Layout: {
    height: 17,
    width: 127,
    top: 0,
    position: "absolute",
  },
  placeholderTypo: {
    color: Color.colorBlack,
    fontSize: FontSize.size_lg,
    textAlign: "left",
  },
  pseudoTypo: {
    fontFamily: FontFamily.openSansSemiBold,
    fontWeight: "600",
    fontSize: FontSize.size_mini,
    color: Color.colorBlack,
    textAlign: "left",
    position: "absolute",
  },
  login2Typo: {
    fontFamily: FontFamily.interRegular,
    position: "absolute",
  },
  welcomeBack: {
    height: 30,
    fontSize: FontSize.size_xl,
    top: 0,
    color: Color.colorGray,
    width: 325,
  },
  login1: {
    top: 36,
    fontSize: 30,
    fontWeight: "700",
    width: 176,
    height: 44,
  },
  loginTitle: {
    top: 156,
    height: 80,
    left: 14,
    width: 325,
  },
  captureDCran20240113081Icon: {
    top: 26,
    left: 113,
    width: 148,
    height: 124,
    position: "absolute",
  },
  bg: {
    top: 9,
    borderRadius: Border.br_3xs,
    borderStyle: "solid",
    borderColor: Color.colorGray,
    borderWidth: 2,
    height: 60,
    left: 0,
  },
  bg1: {
    backgroundColor: Color.colorPalegoldenrod,
    left: 0,
  },
  label: {
    left: 10,
  },
  placeholder: {
    top: 27,
    left: 20,
    fontFamily: FontFamily.segoeUI,
    color: Color.colorBlack,
    fontSize: FontSize.size_lg,
    position: "absolute",
  },
  input1: {
    top: 254,
  },
  input11: {
    top: 338,
  },
  pseudo: {
    top: 251,
    left: 38,
  },
  password: {
    top: 335,
    left: 46,
  },
  yourPassword: {
    top: 364,
    left: 36,
    width: 209,
    height: 26,
    color: Color.colorBlack,
    fontSize: FontSize.size_lg,
    textAlign: "left",
  },
  bg4: {
    height: "100%",
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "0%",
    borderRadius: 15,
    backgroundColor: "#840000",
    shadowColor: "rgba(5, 5, 34, 0.15)",
    shadowOffset: {
      width: -1,
      height: 1,
    },
    shadowRadius: 10,
    elevation: 10,
    shadowOpacity: 1,
    position: "absolute",
    width: "100%",
  },
  btn: {
    height: "7.39%",
    width: "86.67%",
    top: "59.98%",
    right: "9.6%",
    bottom: "32.64%",
    left: "3.73%",
    position: "absolute",
  },
  login2: {
    top: 540,
    left: 151,
    color: Color.colorWhite,
    textAlign: "center",
    fontSize: FontSize.size_xl,
  },
  login: {
    backgroundColor: Color.colorWhite,
    flex: 1,
    height: 812,
    overflow: "hidden",
    width: "100%",
  },
});

export default Login;
