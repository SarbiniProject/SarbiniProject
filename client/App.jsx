import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View ,} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StripeProvider } from '@stripe/stripe-react-native';
import OneProduct from './components/Controller/OneProduct';
import Report from './components/Controller/Report'
import Product from './components/Controller/Product'
import Login from './components/Login'
import Tables from './components/Tables';
import Order from './components/Order';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
    <StripeProvider>
      <Stack.Navigator>
          <Stack.Screen
            name="Product"
            component={Product}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="Tables"
            component={Tables}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="Orders"
            component={Order}
            options={{
              headerShown: false,
            }}
          />
           <Stack.Screen
            name="OneProduct"
            component={OneProduct}
            options={{
              headerShown: false,
            }}
          />
          {/* <Stack.Screen
              name="Report"
              component={Report}
              options={{ headerShown: false }}
            /> */}
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


