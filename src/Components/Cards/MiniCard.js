import React from "react";
import { View, TouchableOpacity, Text, StyleSheet } from "react-native";
import { MaterialIcons, MaterialCommunityIcons } from "@expo/vector-icons";

class MiniCard extends React.Component {
  render() {
    return (
      <View style={{ alignItems: "center" }}>
        <TouchableOpacity style={styles.container} onPress={this.props.onPress}>
          {this.props.iconGroup == "MI" ? (
            <MaterialIcons
              name={this.props.name}
              size={30}
              color="darkorange"
            />
          ) : (
            <MaterialCommunityIcons
              name={this.props.name}
              size={30}
              color="darkorange"
            />
          )}
        </TouchableOpacity>
        <Text style={styles.text}>{this.props.text}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width: 60,
    height: 60,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "lightgrey",
    margin: 10,
    padding: 5,
    borderRadius: 30,

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.32,
    shadowRadius: 5.46,

    elevation: 9,
  },
  text: {
    fontSize: 14,
  },
});

export default MiniCard;
