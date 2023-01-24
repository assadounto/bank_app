import { StatusBar } from 'expo-status-bar';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import { StyleSheet, Text, View } from 'react-native';
import Splash from './components/SplashScreen';
import Loginscreen from './components/Loginscreen';
import MyTabs from './components/bottom_nav';
import { Provider,Context } from './components/auth';


const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <Provider>
      <NavigationContainer>
      <Stack.Navigator
         screenOptions={{headerShown: false}}
         >
        <Stack.Screen
          name="Splash"
          component={Splash}
          options={{title: 'Welcome'}}
      
        />
        <Stack.Screen name="login" component={Loginscreen} />
        <Stack.Screen name="Tabs" component={MyTabs} />
      
      </Stack.Navigator>
    </NavigationContainer>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
