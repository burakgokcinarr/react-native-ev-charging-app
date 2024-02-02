import React, { useCallback } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { useFonts } from 'expo-font';
// Custom Fonts
import { FontLoader } from './src/config/FontLoader';
import { Fonts } from './src/constants'
// Navigation
import NavigationRouter from './src/navigation/NavigationRouter';
import { Provider } from 'react-redux';
import { store } from './src/redux/store/Store';
import { ClerkProvider, SignedIn, SignedOut } from "@clerk/clerk-expo";
import { Login } from './src/screens/auth'
import * as SecureStore from "expo-secure-store";

export default function App() {

  const [fontsLoaded] = useFonts(FontLoader);
  if (!fontsLoaded) {
    return null;
  }

  const tokenCache = {
    async getToken(key) {
      try {
        return SecureStore.getItemAsync(key);
      } catch (err) {
        return null;
      }
    },
    async saveToken(key, value) {
      try {
        return SecureStore.setItemAsync(key, value);
      } catch (err) {
        return;
      }
    },
  };

  return (
    <ClerkProvider 
      publishableKey={process.env.EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY}
      tokenCache={tokenCache}
    >
      <Provider store={store}>
        <SignedIn>
          <NavigationRouter />
        </SignedIn>
        <SignedOut>
          <Login/>
        </SignedOut>
      </Provider>
    </ClerkProvider>
  );
}
