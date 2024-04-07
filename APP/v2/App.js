import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Data from './Data';
import Thingspeak from './Thingspeak';
import Info from './Info';

import Ionicons from 'react-native-vector-icons/Ionicons';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator 
        initialRouteName='Data'
        screenOptions={({ route }) => ({
          headerShown: false,
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Date') {
              iconName = focused
                ? 'cloud-download'
                : 'cloud-download-outline';
            }
            
            else if (route.name === 'Thingspeak') {
              iconName = focused 
              ? 'analytics'
              : 'analytics-outline';
            }

            else if (route.name === 'Info') {
              iconName = focused 
              ? 'information-circle'
                : 'information-circle-outline';
            }

            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: '#67AB9F',
          tabBarInactiveTintColor: '#9AC7BF',
        })}>
        <Tab.Screen name="Date" component={Data} />
        <Tab.Screen name="Thingspeak" component={Thingspeak} />
        <Tab.Screen name="Info" component={Info} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
//<Tab.Screen name="Advanced" component={Advanced} />
