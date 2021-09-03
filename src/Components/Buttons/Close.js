import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function Close({ onPress, style }) {
  return (
    <TouchableOpacity style={[styles.boton, style]} onPress={onPress}>
      <Ionicons name="close" size={32} color="black" />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  boton: {
    alignItems: "center",
    justifyContent: "center",
  },
});
