import { StyleSheet, Text, View, ActivityIndicator, ScrollView } from 'react-native'
import React from 'react';
import { Clerk, useUser } from "@clerk/clerk-expo";
import { Image } from 'expo-image';
import { Color, Fonts } from '../../../constants';
import { CustomButton } from '../../../components';

export default function Settings() {

  const { isLoaded, user } = useUser();
  //console.log(user)

  const logout = async () => {
    try {
      await Clerk.signOut();
    } catch (err) {
      console.log(err);
    }
  }

  if (isLoaded && !user) {
    return (
      <View style={styles.container}>
        <ActivityIndicator size='small' color={Color.BLACK_COLOR} />
      </View>
    )
  }

  return (
    <ScrollView style={styles.profile}>
      <Image
        style={styles.image}
        source={user.imageUrl}
        contentFit="cover"
        transition={1000}
      />

      <View style={styles.info}>
        <Text style={styles.title}>Adı</Text>
        <Text style={styles.desc}>{user.firstName}</Text>
      </View>
      <View style={styles.info}>
        <Text style={styles.title}>Soyadı</Text>
        <Text style={styles.desc}>{user.lastName}</Text>
      </View>
      <View style={styles.info}>
        <Text style={styles.title}>E-Posta</Text>
        <Text style={styles.desc}>{user.emailAddresses.toString()}</Text>
      </View>
      <CustomButton
        title={"Çıkış Yap"}
        onPress={logout}
        textColor={Color.WHITE_COLOR}
        color={Color.RED_COLOR}
        style={{ marginTop: 20 }}
      />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  profile: {
    flex: 1,
    paddingVertical: 15
  },
  info: {
    flexDirection: 'row', 
    justifyContent: 'space-between',
    backgroundColor: Color.WHITE_COLOR,
    borderRadius: 10,
    padding:15, 
    marginHorizontal: 15,
    borderWidth: 0.2,
    borderColor: Color.BLACK_COLOR,
    marginTop: 5,
    shadowColor: "#FFFFFF",
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity:  0.23,
    shadowRadius: 11.78,
    elevation: 15
  },
  title: {
    fontSize: 16,
    fontFamily: Fonts.semiBold,
    textAlign: 'left',
    color: Color.BLACK_COLOR,
  },
  desc: {
    fontSize: 15,
    fontFamily: Fonts.regular,
    textAlign: 'right',
    color: Color.GREEN_COLOR,
  },
  image: {
    width: 125,
    height: 125,
    borderRadius: 75,
    borderWidth: 1,
    borderColor: Color.GREEN_COLOR,
    alignSelf: 'center',
  },
})