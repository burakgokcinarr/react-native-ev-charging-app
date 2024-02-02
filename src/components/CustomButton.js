import React, { useState, useRef } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { Fonts } from "../constants";

const CustomButton = ({
  title,
  onPress = null,
  disabled = false,
  style,
  iconLeft,
  iconRight,
  color = "#000",
  textColor = "#000"
}) => {
  
  return (
    <TouchableOpacity
      style={[styles.button, style, { backgroundColor: color }]}
      onPress={onPress}
      disabled={disabled}
    >
      {
        iconLeft && <View style={styles.iconLeftContainer}>{iconLeft}</View>
      }
        <Text style={[styles.text, { color: textColor }]}>{title}</Text>
      {
        iconRight && <View style={styles.iconRightContainer}>{iconRight}</View>
      }
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    width: "80%",
    height: 45,
    borderRadius: 100,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center'
  },
  text: {
    fontSize: 18,
    fontFamily: Fonts.semiBold,
    textAlign: 'center',
    alignItems: 'center',
    justifyContent: 'center'
  },
  iconLeftContainer: {
    position: "absolute",
    left: 10,
  },
  iconRightContainer: {
    position: "absolute",
    right: 10,
  },
});

export default CustomButton;
