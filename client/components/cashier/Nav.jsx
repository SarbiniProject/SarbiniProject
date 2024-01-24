import React, { useEffect, useState } from 'react';
import {Modal,TextInput, View, Text, TouchableOpacity } from 'react-native';
import { Appbar, Avatar } from 'react-native-paper';
import { useRoute, useNavigation } from '@react-navigation/native'
const Nav = ({socket,one }) => {
  const [notificationPressed, setNotificationPressed] = useState(false);
  const [profileModalVisible, setProfileModalVisible] = useState(false);
  const [notifications,setNotifications]=useState("")
  const [send, setSend] = useState('');
  const [liked, setLiked] = useState(false);
  const navigation = useNavigation();
  const [tableN, setTableN] = useState(null);

  const handleNotification = (text) => {
    socket.emit("sendText", {
      senderName: 5,
      receiverName: 1,
      text,
    });
  };

 
  const extractNumbersFromString = inputString => {
    const numbers = inputString.match(/\d+/g);
    const result = numbers ? numbers.map(Number) : [];
    setTableN(result[0]) 
  };
 

  socket.on("getText", (data) => {
    // setNotifications((prev) => [...prev, data]);
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
            onChangeText={(text) => setSend(text)}
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
