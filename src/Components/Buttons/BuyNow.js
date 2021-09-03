import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";

class BuyNow extends React.Component {
  render() {
    return (
      <TouchableOpacity
        style={[styles.button, this.props.style]}
        onPress={this.props.onPress}
      >
        <Text style={styles.text}>{this.props.title}</Text>
      </TouchableOpacity>
    );
  }
}

export default BuyNow;

const styles = StyleSheet.create({
  button: {
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
  text: {
    color: "#fff",
    fontSize: 12,
  },
});
