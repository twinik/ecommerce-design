import React from "react";
import { StyleSheet, View, TouchableOpacity, Image } from "react-native";
import { MaterialIcons, Ionicons } from "@expo/vector-icons";

const Navbar = ({ cart, profile }) => {
  return (
    <View style={styles.menuHead}>
      <View style={styles.headerIcons}>
        <View style={styles.headerLeft}>
          <Image
            style={styles.icon}
            source={require("../../assets/sportshop.png")}
          />
        </View>

        <View style={styles.headerCentral}>
          <TouchableOpacity onPress={cart}>
            <Ionicons name="ios-cart" size={22} color="white" />
          </TouchableOpacity>
        </View>

        <View style={styles.headerRight}>
          <TouchableOpacity onPress={profile}>
            <Ionicons name="person" size={22} color="white" />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Navbar;

const styles = StyleSheet.create({
  menuHead: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "darkorange",
  },
  headerLeft: {
    flex: 3,
    alignItems: "flex-start",
    marginLeft: "8%",
  },
  headerCentral: {
    flex: 0.5,
    alignItems: "center",
  },
  headerRight: {
    flex: 0.5,
    alignItems: "flex-end",
    marginRight: "8%",
  },
  headerIcons: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  icon: {
    width: 125,
    height: 50,
    resizeMode: "center",
  },
  tinyIcon: {
    height: 40,
    width: 40,
  },
});
