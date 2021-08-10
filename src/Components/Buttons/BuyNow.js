import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";

class BuyNow extends React.Component {
  render() {
    return (
      <TouchableOpacity
        style={[styles.boton, this.props.style]}
        onPress={this.props.onPress}
      >
        <Text style={styles.texto}>{this.props.title}</Text>
      </TouchableOpacity>
    );
  }
}

export default BuyNow;

const styles = StyleSheet.create({
  boton: {
    backgroundColor: "#472B0A",
    padding: 5,
    color: "#fff",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
    width: 70,
    height: 30,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  texto: {
    color: "#fff",
    fontSize: 12,
  },
});
