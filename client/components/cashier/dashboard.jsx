import React, { useState, useEffect } from 'react';
import {
  ActivityIndicator,
  View,
  Text,
  FlatList,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import { Port } from "../port";

import axios from 'axios';
import { useRoute, useNavigation } from '@react-navigation/native';
import { io } from "socket.io-client";

import { Provider as PaperProvider } from 'react-native-paper';
import Nav from './Nav.jsx';
const Dashboard = ({socket}) => {

  const [waiter, setWaiter] = useState([]);
  const [orders, setOrders] = useState([]);
  const [one,setOne]=useState(1)
  const [loading, setLoading] = useState(false);
  const route = useRoute();
  const navigation = useNavigation();
 const userId =route.params?.userId;


 useEffect(() => {
  socket?.emit("newUser",userId);
}, [socket]);




 
  const fetchWaiters = () => {
    axios
      .get('http://'+Port+':3000/api/sarbini/users')
      .then((res) => {
        const w = res.data.filter((e) => e.user_role === 'waiter');
        setWaiter(w);
      })
      .catch((err) => {
        console.error('error', err);
      });
  };

  const fetchOrders = (userId) => {
    setLoading(true);
    axios
      .get(`http://${Port}:3000/api/sarbini/orders/${userId}`)
      .then((res) => {
        setOrders(res.data);
       
       
      })
      .catch((err) => {
        console.error('error', err);
      })
      .finally(() => {
        setLoading(false);
      });
  };
  // useEffect(() => {
  //   fetchOrders();
  // }, [loading]);

  useEffect(() => {
    // setUser(userId)
    fetchWaiters();
  }, []);


  // const handleLogout = async () => {
  //   await AsyncStorage.removeItem('authToken');
  //   // Additional logout logic if needed
  // };
  return (
    <PaperProvider>
    
    <Nav socket={socket}  one={one} userId={userId}/>
    
    <View style={styles.container}>
      {/* Left side for Category Filters */}
      <View style={styles.filterContainer}>
        <ScrollView showsVerticalScrollIndicator={false}>
          {waiter.map((w, index) => (
            <TouchableOpacity
              key={index}
              onPress={() => {
                fetchOrders(w.id) 
                setOne(w.id)}}
              style={[styles.categoryButton, w.id === orders[0]?.userId && styles.selectedCategory]}
            >
              <Image source={{ uri: 'https://i.pinimg.com/1200x/d3/59/b7/d359b7d4e0bd39d4a4eb261e211b46d0.jpg' }} style={styles.categoryImage} />
              <Text style={styles.categoryText}>{w.user_name}</Text>
              <Text style={styles.categoryText}>ID:#{w.id}</Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>

      {/* Right side for provider list */}
      <View style={styles.resultsContainer}>
        {loading ? (
          <ActivityIndicator size="large" color="#0000ff" />
        ) : (
          <FlatList
            data={orders}
            keyExtractor={(item) => (item && item.id ? item.id.toString() : 'default_key')}
            renderItem={({ item }) => (
              <TouchableOpacity   onPress={()=> navigation.navigate('OrderW', { idOrder: item.id,fetchOrders:fetchOrders})}>
                <View style={styles.card}>
                  <Image source={{ uri: 'https://png.pngtree.com/png-vector/20190130/ourlarge/pngtree-cartoon-restaurant-table-element-design-tabletable-and-chairillustrationhotel-png-image_680996.jpg' }} style={styles.profileImage} />
                  <View style={styles.textContainer}>
                    <Text style={styles.username}>{"Table"+item.name || 'N/A'}</Text>
                    <Text style={styles.category}>{item.satus1 ? "open" : "closed"}</Text>
                    <Text style={styles.category}>{item.satus2 ? 'finished' : 'In Process'}</Text>
                  </View>
                </View>
              </TouchableOpacity>
            )}
          />
        )}
      </View>
    </View></PaperProvider>
  );
};


const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
      },
  
    card: {
      padding:10,
      flexDirection: 'row',
      marginBottom: 10,
      borderWidth: 1,
      borderColor: '#ccc',
      borderRadius: 10,
      overflow: 'hidden',
    },
    profileImage: {
      width: 80,
      height: 80,
      borderRadius: 15,
      objectFit:'cover'
    },
    textContainer: {
      flex: 1,
      justifyContent: 'center',
      paddingHorizontal: 10,
    },
    username: {
      fontSize: 18,
      fontWeight: 'bold',
    },
    category: {
      fontSize: 14,
      color: '#888',
    },
    categoryContainer: {
      flexDirection: 'row',
      marginBottom: 10,
      paddingHorizontal: 5,
    },
    categoryButton: {
      flexDirection: 'column',  
      alignItems: 'center',
      justifyContent: 'center',
      marginBottom: 20,
      padding: 10,
      borderRadius: 5,
      backgroundColor: '#f5f5f5', 
    },
    categoryImage: {
      width: 50,
      height: 50,
      marginBottom: 5,  
      borderRadius: 25,
    },
    categoryText: {
      textAlign: 'center',
      fontSize: 12,
    },
    container: {
      flex: 1,
      flexDirection: 'row', 
    },
    filterContainer: {
      flex: 1,
      borderRightWidth: 1,
      borderColor: '#ccc',
      padding: 10,
    },
    resultsContainer: {
      flex: 2,
      padding: 10,
    },
   
    selectedCategory: {
      backgroundColor: '#ddd',  
    }
  })

export default Dashboard