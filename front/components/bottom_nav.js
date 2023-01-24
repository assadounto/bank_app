import { Ionicons,FontAwesome,AntDesign } from "@expo/vector-icons";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MainScreen from './MainScreen';
import transaction from './Transaction';
import Profile from "./profile";
import Scanner from "./scanner";

const Tab = createBottomTabNavigator();

const MyTabs= () => {
  return (
    <Tab.Navigator
    screenOptions={{headerShown: false, nameShown: false}}
    >
      <Tab.Screen name="Home" 
      component={MainScreen}
      options={{
        tabBarIcon: ({ color, size }) => (
          <Ionicons name="home" color={color} size={size} />
        ),
      }}
      
      />
      <Tab.Screen name="Send" component={transaction} 
      options={{
        tabBarIcon: ({ color, size }) => (
          <FontAwesome name="send-o" color={color} size={size} />
        ),
      }}
      />
      <Tab.Screen name="Scan"
       component={Scanner} 
        options={{
          tabBarIcon: ({ color, size }) => (
            <AntDesign name="scan1" color={color} size={size} />
          ),
        }}
        />
      <Tab.Screen name="Profile" 
      component={Profile} 
      options={{
        tabBarIcon: ({ color, size }) => (
          <Ionicons name="person" color={color} size={size} />
        ),
      }}
      
      />
    </Tab.Navigator>
  );
}

export default MyTabs;

