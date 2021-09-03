import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

const GenericButton = ({ onPress, style, title, styleText }) => {
  return (
    <TouchableOpacity style={[styles.button, style]} onPress={onPress}>
      <Text style={[styles.text, styleText]}>{title}</Text>
    </TouchableOpacity>
  );
};

export default GenericButton;

const styles = StyleSheet.create({
  button: {
    backgroundColor: "red",
    alignItems: "center",
    justifyContent: "center",
    padding: 5,

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  text: {
    color: "#fff",
    fontSize: 18,
  },
});
