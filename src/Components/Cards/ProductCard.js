import React from "react";
import { View, TouchableOpacity, Text, StyleSheet, Image } from "react-native";
import { MaterialIcons, Feather } from "@expo/vector-icons";

function ProductCard({ onPress, item }) {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <View style={{ flex: 0.5, flexDirection: "row", margin: 5 }}>
        <TouchableOpacity style={{ flex: 1 }}>
          <MaterialIcons name="favorite-outline" size={20} color="black" />
        </TouchableOpacity>
        <TouchableOpacity style={{ flex: 1, alignItems: "flex-end" }}>
          <Feather name="shopping-bag" size={20} color="black" />
        </TouchableOpacity>
      </View>

      <View style={{ flex: 2 }}>
        <Image
          style={styles.img}
          source={{
            uri: item.imgUrl,
          }}
        />
      </View>

      <View style={styles.dataProduct}>
        {(item.new && (
          <Text style={{ color: "darkorange", fontSize: 12 }}>New</Text>
        )) || <Text style={{ color: "transparent", fontSize: 12 }}></Text>}
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.price}>${item.price}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 150,
    backgroundColor: "white",
    margin: 10,
    padding: 5,
    borderRadius: 10,

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,

    elevation: 4,
  },
  dataProduct: {
    flex: 1.2,
    marginHorizontal: "5%",
  },

  img: {
    width: 140,
    height: 100,
    resizeMode: "cover",
  },
  title: {
    textAlign: "left",
    fontSize: 15,
    fontWeight: "bold",
  },
  price: {
    textAlign: "left",
    fontSize: 15,
  },
});

export default ProductCard;
