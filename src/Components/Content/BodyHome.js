import React from "react";
import { StyleSheet, Text, View } from "react-native";

import CarouselCards from "../Cards/CarouselCards";
import MiniCardsGroup from "../Cards/MiniCardsGroup";

import ProductsList from "../Lists/ProductsList";

const BodyHome = () => {
  return (
    <View style={{ flex: 10 }}>
      <View style={styles.backgroundDesign} />
      <View style={styles.bodyContent}>
        <View style={styles.containerCarousel}>
          <CarouselCards />
        </View>
        <View style={styles.containerMiniCards}>
          <MiniCardsGroup />
        </View>
        <View style={styles.containerProducts}>
          <View style={styles.headerProducts}>
            <Text style={styles.title}>Products</Text>
          </View>
          <ProductsList />
        </View>
      </View>
    </View>
  );
};

export default BodyHome;

const styles = StyleSheet.create({
  containerCarousel: {
    flex: 2,
  },
  containerMiniCards: {
    flex: 1.6,
  },
  containerProducts: {
    flex: 5,
    width: "100%",
    backgroundColor: "#F5F5F5",
    padding: 15,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
  },

  backgroundDesign: {
    backgroundColor: "darkorange",
    width: "100%",
    height: 90,
    borderBottomLeftRadius: 25,
    borderBottomRightRadius: 25,
    position: "absolute",
  },
  bodyContent: {
    flex: 10,
    alignItems: "center",
  },

  headerProducts: {
    flexDirection: "row",
    marginHorizontal: "5%",
  },

  title: {
    flex: 1,
    fontWeight: "bold",
    fontSize: 24,
    color: "darkorange",
  },
});
