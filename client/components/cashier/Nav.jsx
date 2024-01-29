import React, { useEffect, useState } from 'react';
import {Modal,TextInput, View, Text, TouchableOpacity } from 'react-native';
import { Appbar, Avatar } from 'react-native-paper';
import { useRoute, useNavigation } from '@react-navigation/native'
import axios from 'axios';
import { Port } from "../port";
const Nav = ({socket,one ,userId}) => {
  const [notificationPressed, setNotificationPressed] = useState(false);
  const [profileModalVisible, setProfileModalVisible] = useState(false);
  const [notifications,setNotifications]=useState("")
  const [send, setSend] = useState('');
  const [liked, setLiked] = useState(false);
  const navigation = useNavigation();
  const [tableN, setTableN] = useState(null);
  const [waiterN, setWaiterN] = useState(null);

  const extractNumbersFromString2 = inputString => {
    const numbers = inputString.match(/\d+/g);
    const result = numbers ? numbers.map(Number) : [];
  
    return result[0]
  };

  useEffect(() => {
    let waiter = extractNumbersFromString2(send);
    waiter?getalltables(waiter):console.log(waiter);;
  }, [send]);

  const getalltables = (id) => {
    return new Promise((resolve, reject) => {
      axios.get(`http://${Port}:3000/api/sarbini/ordersOne/${id}`)
        .then((res) => {
          console.log(res.data.userId);
          setWaiterN(res.data.userId);
          resolve(res.data.userId);
        })
        .catch((err) => {
          console.error("error", err);
          reject(err);
        });
    });
  };
  
  const handleNotification = async (text) => {
   
  
    try {
      await 
  
      socket.emit("sendText", {
        senderName: userId,
        receiverName: waiterN,
        text,
      });
    } catch (error) {
      console.error("Error in handleNotification:", error);
    }
  };
  
  
  

 
  const extractNumbersFromString = inputString => {
    const numbers = inputString.match(/\d+/g);
    const result = numbers ? numbers.map(Number) : [];
    setTableN(result[0]) 
  };


  socket.on("getText", (data) => {
    setNotificationPressed(true);
    setNotifications(data.text);
    console.log('====================================');
    console.log('waiter side ',data.text);
    console.log('====================================');
    extractNumbersFromString(data.text)
    
  });


  const handleNotificationPress = () => {
    setNotificationPressed(!notificationPressed);

  };

  const handleProfilePress = () => {
    setProfileModalVisible(true);
    console.log('Profile button pressed');

  };
  const closeModal = () => {
    setProfileModalVisible(false);
   
  };

 
  


  const renderDropdownNotification = () => {
    if (notificationPressed) {
      return (
        <View style={{zIndex:999, position: 'absolute', top: 110,width:250, right: 12, backgroundColor: 'white', padding: 10, borderRadius: 10 }}>
          <TouchableOpacity  onPress={()=>{navigation.navigate('OrderW',{idOrder: tableN})}}>
          <Text style={{textAlign:'center',fontSize:35}}>{notifications}</Text>
          </TouchableOpacity>
        </View>
      );
    }
    return null;
  };

  return (
    <>
      <Appbar.Header>
        <Avatar.Image style={{ marginLeft: 20 }} size={60} source={require('../../assets/sarbini_black.png')} />

        <Appbar.Content title="Cashier Dashboard" />
        <TouchableOpacity onPress={handleNotificationPress}>
          <Appbar.Action
            icon="bell"
            color={notificationPressed ? 'red' : 'black'}
          />
        </TouchableOpacity>
        <Appbar.Action 
          icon="message-text"
          onPress={handleProfilePress} 
        />
   
      
      </Appbar.Header>
      

      {renderDropdownNotification()}

      <Modal
        animationType="slide"
        transparent={true}
        visible={profileModalVisible}
        onRequestClose={closeModal}
      >
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <View style={{ backgroundColor: 'white', padding: 20, borderRadius: 10 }}>
           <TextInput
            onChangeText={(text) => 
              setSend(text)

            }
            placeholder="        Send Notification"
            style={{
                width:200,
              borderStyle: 'solid',
              borderColor: 'black',
              borderWidth: 1,
              paddingLeft: 10,
              height: 54,
              borderRadius: 5,
              
            }}
          />
            <TouchableOpacity onPress={()=>{
              handleNotification(send)
              closeModal()
              }}>
              <View style={{ marginTop: 10, backgroundColor: 'blue', padding: 10, borderRadius: 5 }}>
                <Text style={{ color: 'white', textAlign: 'center' }}>send</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </>
  );
};

export default Nav;
