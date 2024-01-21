import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StripeProvider } from '@stripe/stripe-react-native';
import Products from './components/Products'
import Login from './components/Login'
import Dashboard from './components/cashier/dashboard.jsx'
import Order from './components/cashier/order.jsx';

const STRIPE_KEY =
  'pk_test_51NfOUIFIt3rgcksJfXUm5Pv71NeMwybINDDYSd6XL4HDfdJXUN1NJnfsA9pnbVNIFVL2gfobuer8ORndXw7ZsobV00tj4N01N0';


const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <StripeProvider publishableKey={STRIPE_KEY} merchantIdentifier='merchant.identifier'>
      <Stack.Navigator>
          <Stack.Screen
            name="Dashboard"
            component={Dashboard}
            options={{
              headerShown: true,
            }}
          />
           <Stack.Screen
            name="Order"
            component={Order}
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