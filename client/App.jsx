import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View ,} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StripeProvider } from '@stripe/stripe-react-native';
import Products from './components/Products'
import OneProduct from './components/OneProduct';
import Report from './components/Report'
const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
    <StripeProvider>
      <Stack.Navigator>
          {/* <Stack.Screen
            name="Products"
            component={Products}
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
          /> */}
          <Stack.Screen
              name="Report"
              component={Report}
              options={{ headerShown: false }}
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

