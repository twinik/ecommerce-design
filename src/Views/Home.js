import React from "react";
import { View, StyleSheet, StatusBar, SafeAreaView } from "react-native";
import { global } from "../Styles/Global";

import Navbar from "../Components/Navbar";
import BodyHome from "../Components/Content/BodyHome";

const Home = ({ navigation }) => {
  StatusBar.setBackgroundColor("darkorange", true);
  StatusBar.setBarStyle("white");

  return (
    <SafeAreaView style={styles.container}>
      <Navbar
        fav={() => navigation.navigate("Favorites")}
        profile={() => navigation.navigate("Profile")}
      />
      <BodyHome />
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight,
    backgroundColor: "white",
  },
});
