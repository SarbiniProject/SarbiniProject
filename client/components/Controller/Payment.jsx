import {
    Text,
    View,
    StyleSheet,
    KeyboardAvoidingView,
    Platform,
    TouchableOpacity,
    Modal,
    Image,
    Alert
  } from "react-native";
  import axios from 'axios';
  import { SafeAreaView } from "react-native-safe-area-context";
  import { useState } from "react";
  import DatePicker from "react-native-modern-datepicker";
  import { useRoute } from '@react-navigation/native';
  import { useStripe } from "@stripe/stripe-react-native";
  import { Port } from "../port";
  
  export default function Payment() {
    const [openStartDatePicker, setOpenStartDatePicker] = useState(false);
    const route = useRoute();
    const { initPaymentSheet, presentPaymentSheet } = useStripe();
    const [isPaymentSheetInitialized, setIsPaymentSheetInitialized] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [selectedStartDate, setSelectedStartDate] = useState("");
    const[pop,setpop]=useState(false) 
    const image=require('../../assets/w.png')

  
  // control the date picker in the model is open
    const handleOnPressStartDate = () => {
      setOpenStartDatePicker(!openStartDatePicker);
    };

  
  
   ////////////////////////PAYMENT/////////////////////////////////////////////////////
 const initializePaymentSheet = async () => {
    try {
      setIsLoading(true);
  
      const response = await axios.post('http://'+Port+':3000/api/sarbini/pay', {
        amount: 10000,
      });
  
      const { error } = await initPaymentSheet({
        paymentIntentClientSecret: response.data.clientSecret,
        merchantDisplayName: 'Your Merchant Name', // Provide a valid merchant display name
      });
  
      if (error) {
        console.error('Error initializing payment sheet:', error);
      } else {
        setIsPaymentSheetInitialized(true);
      }
    } catch (error) {
      console.error('Error fetching client secret:', error);
    } finally {
      setIsLoading(false);
    }
  };
  
  
  const pay = async () => {
    try {
      if (!isPaymentSheetInitialized) {
        console.error('Payment sheet is not initialized yet.');
        return;
      }
  
      const { error } = await presentPaymentSheet();
  
      if (error) {
        console.error('Error presenting payment sheet:', error);
        Alert.alert('Error', 'Payment failed. Please try again.');
       
      } else {
        
        Alert.alert('Success', 'Payment successful!');
       
        
      }
     
      
      
    } catch (error) {
      console.error('Error during payment:', error);
    }
  };
  
  
  ////////////////////////////////////////////////////////////////////////////////////
  
  
  
  
  
  
    return (
      <SafeAreaView style={{ flex: 1 }}>
        <KeyboardAvoidingView
          behavior={Platform.OS == "ios" ? "padding" : ""}
          style={{
            width: "100%",
            height: "100%",
          }}
        >
          <View style={{ flex: 1, alignItems: "center" }}>
            <Image   style={styles.iconImage}
                 
                
                 resizeMode="contain"
  
               source={image}
               />
             
             <Text style={styles.textHeader}>Reservation</Text>
  
  
            <View style={{ width: "100%", paddingHorizontal: 22, marginTop: 64 }}>
              <View>
               
                <Text style={{ fontSize: 18 }}>Select Date</Text>
                <TouchableOpacity
                  style={styles.inputBtn}
                  onPress={()=>{
                    handleOnPressStartDate()
                    initializePaymentSheet()
                }}>
                  <Text style= {{ fontSize: 20, color: "white" }}>{selectedStartDate}</Text>
                </TouchableOpacity>
              </View>
              {/* handel payment   */}
              <TouchableOpacity
                onPress={pay}
                style={styles.submitBtn}
              >
                <Text style={{ fontSize: 20, color: "white" }}>Submit</Text>
              </TouchableOpacity>
            </View>
  
            {/* Create modal for date picker */}
            <Modal
              animationType="slide"
              transparent={true}
              visible={openStartDatePicker}
            >
              <View style={styles.centeredView}>
               
                <View style={styles.modalView}>
                <DatePicker
                  mode="calendar"
              
                  onSelectedChange={(date) => setSelectedStartDate(date)}
                  options={{
                    backgroundColor: "#080516",
                    textHeaderColor: "#FFA500",
                    textDefaultColor: "#FFFFFF",
                    selectedTextColor: "#FFF",
                    mainColor: "#FFA500",
                    textSecondaryColor: "#FFFFFF",
                    borderColor: "rgba(122, 146, 165, 0.1)",
                  }}
                />
  
                  <TouchableOpacity onPress={handleOnPressStartDate}>
                    <Text style={{ color: "white" }}>Close</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </Modal>
          </View>
        </KeyboardAvoidingView>
      </SafeAreaView>
    );
  }
  
  const styles = StyleSheet.create({
    ImageHeader: {
  
      marginVertical: 60,
    
    },
    iconImage: {
        width: 350,
        height: 150,
        resizeMode: 'contain',
      },
    textHeader: {
      fontSize: 30,
      marginVertical: 60,
      color: "#111",
    },
    textSubHeader: {
      fontSize: 25,
      color: "#111",
    },
    inputBtn: {
        borderWidth: 1,
        borderRadius: 4,
        borderColor: "#d15c54",
        backgroundColor: "#d15c54", // Set background color to red
        height: 50,
        paddingLeft: 8,
        fontSize: 18,
        justifyContent: "center",
        marginTop: 14,
        color: "white", // Set text color to white or any contrasting color
      }
      ,
    submitBtn: {
      backgroundColor: "#d15c54",
      paddingVertical: 22,
      alignItems: "center",
      justifyContent: "center",
      borderRadius: 8,
      paddingVertical: 12,
      marginVertical: 16,
    },
    centeredView: {
      flex: 1,
      alignItems: "center",
      justifyContent: "center",
    },
    modalView: {
      margin: 20,
      backgroundColor: "#080516",
      alignItems: "center",
      justifyContent: "center",
      borderRadius: 20,
      padding: 35,
      width: "90%",
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 4,
      elevation: 5,
    },
  });
  