import React, { useState } from "react";
import { View, TouchableOpacity, Text, StyleSheet, Image } from "react-native";
import { MaterialIcons, Feather, AntDesign } from "@expo/vector-icons";

import ModalProduct from "../Modals/ModalProduct";

function ProductCard({ item }) {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => {
        setModalVisible(true);
      }}
    >
      <ModalProduct
        item={item}
        setModalVisible={setModalVisible}
        modalVisible={modalVisible}
      />

      <View style={styles.buttonsCard}>
        <TouchableOpacity style={{ flex: 1 }}>
          <AntDesign name="hearto" size={23} color="black" />
        </TouchableOpacity>
        <View style={{ flex: 3 }} />
        <TouchableOpacity style={{ flex: 1 }}>
          <Feather name="shopping-bag" size={23} color="black" />
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
        <Text style={{ color: "darkorange", fontSize: 12 }}>New</Text>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.price}>${item.price}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 150,
    height: 220,
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
  buttonsCard: {
    flex: 0.5,
    flexDirection: "row",
    margin: 5,
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
