import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  Image,
  TouchableOpacity,
} from "react-native";

import BuyNow from "../Buttons/BuyNow";

export const SLIDER_WIDTH = Dimensions.get("window").width + 80;
export const ITEM_WIDTH = 300;
const windowWidth = Dimensions.get("window").width;

const CarouselCardItem = ({ item, index }) => {
  return (
    <View style={styles.container} key={index}>
      <View style={{ flex: 1.3 }}>
        <Image source={{ uri: item.imgUrl }} style={styles.image} />
      </View>

      <View style={{ flex: 1 }}>
        <Text style={{ color: "darkorange" }}>New</Text>
        <Text style={styles.header}>{item.title}</Text>
        <BuyNow
          style={{ marginTop: 10 }}
          title="Buy Now"
          onPress={() => alert("BuyNow")}
        />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    backgroundColor: "lightgrey",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 15,
    width: 300,
    height: 130,

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,
    elevation: 7,
  },
  image: {
    width: 150,
    height: 130,
    resizeMode: "cover",
  },
  header: {
    color: "#222",
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default CarouselCardItem;
