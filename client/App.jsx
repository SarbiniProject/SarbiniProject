import { StatusBar } from 'expo-status-bar';
import { io } from "socket.io-client";
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StripeProvider } from '@stripe/stripe-react-native';
import Products from './components/waiter/Products.js'
import Login from './components/Login'
import Dashboard from './components/cashier/dashboard.jsx'
import Order from './components/waiter/Order.js';
import OrderW from './components/cashier/OrderW.jsx'
const STRIPE_KEY =
  'pk_test_51NfOUIFIt3rgcksJfXUm5Pv71NeMwybINDDYSd6XL4HDfdJXUN1NJnfsA9pnbVNIFVL2gfobuer8ORndXw7ZsobV00tj4N01N0';
  import Tables from './components/waiter/Tables.js';
  import { useEffect, useState } from "react";
  import ProductsCon from './components/Controller/ProductsCon.jsx';
  import { Port } from './components/port.js';
const Stack = createStackNavigator();




const App = () => {
  
  const [user, setUser] = useState(1);
  const [socket, setSocket] = useState(null);

  useEffect(() => {
    setSocket(io("http://"+Port+":5000"));
  }, []);

  // useEffect(() => {
  //   socket?.emit("newUser", user);
  // }, [socket, user]);



  return (
    <NavigationContainer>
      <StripeProvider publishableKey={STRIPE_KEY} merchantIdentifier='merchant.identifier'>
      <Stack.Navigator>
      <Stack.Screen
            name="ProductsCon"
            component={ProductsCon}
            options={{
              headerShown: false,
            }}
          />
      <Stack.Screen
            name="Login"
            component={Login}
            options={{
              headerShown: true,
            }}
          />
          
         <Stack.Screen name="Dashboard"  options={{ headerShown: false,}}>
            {(props) => (  
              <Dashboard {...props} socket={socket} setUser={setUser} />
            )}
          </Stack.Screen>

          <Stack.Screen name="Product"options={{ headerShown: false,}}>
            {(props) => (
              <Products
                {...props}
                socket={socket} setUser={setUser}
                options={{
                  headerShown: false,
                }}
              />
            )}
          </Stack.Screen>
      
           <Stack.Screen name="Orders"options={{
                  headerShown: false,
                }}>
            {(props) => (
              <Order
                {...props}
                socket={socket}
                
              />
            )}
          </Stack.Screen>

            <Stack.Screen
            name="Tables"
            component={Tables}
            options={{
              headerShown: false,
            }}
          />
            <Stack.Screen
            name="OrderW"
            component={OrderW}
            options={{
              headerShown: false,
            }}
          />
          
     </Stack.Navigator>
     
     </StripeProvider>
     </NavigationContainer>
  );
}
export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});