import React from "react";
import { StyleSheet, TouchableOpacity } from "react-native";

const IconButton = ({ onPress, style, icon }) => {
  return (
    <TouchableOpacity style={[styles.button, style]} onPress={onPress}>
      {icon}
    </TouchableOpacity>
  );
};

export default IconButton;

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

    elevation: 3,
  },
});
