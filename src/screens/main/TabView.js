import { View, Text } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { ChargeFind, Favorite, Settings } from '../main/tabs';
import { FontAwesome, MaterialIcons, Ionicons } from '@expo/vector-icons';
import { Fonts, Color } from '../../constants'

const Tab = createBottomTabNavigator();

export default function TabView() {
  return (
    <Tab.Navigator
        screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'charge') {
            iconName = focused ? 'map' : 'map-o';
            return <FontAwesome name={iconName} size={size} color={color} />

          } else if (route.name === 'favorite') {
            iconName = focused ? 'favorite' : 'favorite-outline';
            return <MaterialIcons name={iconName} size={size} color={color} />

          } else if (route.name === 'settings') {
            iconName = focused ? 'settings' : 'settings-outline';
            return <Ionicons name={iconName} size={size} color={color} />

          }
        },
        tabBarActiveTintColor: Color.GREEN_COLOR,
        tabBarInactiveTintColor: Color.WHITE_COLOR,
        headerShown: true,
        title: '',
        headerShadowVisible: false,
        tabBarLabelStyle: {
          fontFamily: Fonts.regular,
          fontSize: 12,
        },
        tabBarStyle: {
          backgroundColor: Color.BLACK_COLOR,
        }
      })}
    >
      <Tab.Screen name="charge" component={ChargeFind} options={{tabBarLabel: 'Charge Map', headerShown: false}}/>
      <Tab.Screen name="favorite" component={Favorite} options={{tabBarLabel: 'Favorite'}}/>
      <Tab.Screen name="settings" component={Settings} options={{tabBarLabel: 'Settings'}}/>
    </Tab.Navigator>
  )
}