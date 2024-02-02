import React, { useState, useEffect } from 'react';
import { ActivityIndicator, View } from 'react-native';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Color } from '../constants'
// Main Stack
import { TabView } from '../screens/main';

const Stack = createNativeStackNavigator();

const theme = {
    ...DefaultTheme,
    colors: {
        ...DefaultTheme.colors,
        background: Color.WHITE_COLOR,
        primary: Color.BLACK_COLOR
    }
}

export default function NavigationRouter() {
    
    return (
        <NavigationContainer theme={theme}>
            <Stack.Navigator screenOptions={{ gestureEnabled: false }}>
                <Stack.Screen name="home" component={TabView} options={{ headerShown: false, title: "" }} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}