import { StyleSheet, Text, View, SafeAreaView } from 'react-native'
import React from 'react'
import { Color, Fonts } from '../../constants'
import { Image } from 'expo-image'
import { CustomButton } from '../../components'
import { AntDesign } from '@expo/vector-icons';
import * as WebBrowser from "expo-web-browser";
import { useOAuth } from "@clerk/clerk-expo";
import { useWarmUpBrowser } from "../../hooks/warmUpBrowser";

const CAR_IMAGE = require('../../../assets/images/CarStation.png');

WebBrowser.maybeCompleteAuthSession();

export default function Login() {

  useWarmUpBrowser();

  const { startOAuthFlow } = useOAuth({ strategy: "oauth_google" });

  const googleButtonClicked = React.useCallback(async () => {
    try {
      const { createdSessionId, signIn, signUp, setActive, authSessionResult } = await startOAuthFlow();

      if (createdSessionId) {
        setActive({ session: createdSessionId });
        console.log(signIn.userData)
      } else {
        // Use signIn or signUp for next steps such as MFA
      }
    } catch (err) {
      console.error("OAuth error", err);
    }
  }, []);

  return (
    <SafeAreaView style= {styles.container}>
      <View style={styles.header}>
        <Text style= {styles.headerText}>Charge Station</Text>
      </View>
      <Image
        style={styles.image}
        source={CAR_IMAGE}
        contentFit="cover"
        transition={1000}
      />
      <Text style= {styles.desc}>
        Your Ultimate EV Charging Station Finder App
      </Text>
      <Text style= {styles.subDesc}>
        Find EV charging station near you, plan trip and so much more in just one click
      </Text>
      <CustomButton 
        title="Google With Login" 
        onPress={googleButtonClicked} 
        color={Color.GREEN_COLOR} 
        textColor={Color.WHITE_COLOR}
        style={styles.googleButton}
        iconLeft={<AntDesign name="google" size={24} color={Color.WHITE_COLOR} />}
      />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    header: {
        marginTop: 30,
        alignItems: 'center',
    },
    headerText: {
        fontSize: 30,
        fontFamily: Fonts.bold,
        textAlign: 'center',
        color: Color.BLACK_COLOR
    },
    image: {
        width: '100%',
        height: 250,
        marginTop: 15
    },
    desc: {
        fontSize: 25,
        fontFamily: Fonts.bold,
        textAlign: 'center',
        color: Color.BLACK_COLOR,
        marginHorizontal: 5
    },
    subDesc: {
        fontSize: 16,
        fontFamily: Fonts.regular,
        textAlign: 'center',
        color: Color.GRAY_COLOR,
        marginHorizontal: 5
    },
    googleButton: {
      marginTop: 30
    }
})