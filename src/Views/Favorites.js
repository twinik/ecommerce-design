import React from "react";
import { View, StyleSheet, StatusBar, Text } from "react-native";
import { global } from "../Styles/Global";

const Favorites = () => {
  return (
    <View style={global.container}>
      <Text>Favorites</Text>
    </View>
  );
};

export default Favorites;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight,
    backgroundColor: "white",
  },
});
