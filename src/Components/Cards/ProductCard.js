import React, { useState } from "react";
import {
  View,
  TouchableOpacity,
  Text,
  StyleSheet,
  Image,
  Modal,
} from "react-native";
import { MaterialIcons, Feather } from "@expo/vector-icons";

import BodyModalProduct from "../Content/BodyModalProduct";

function ProductCard({ onPress, item }) {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => {
        setModalVisible(true);
      }}
    >
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Hello World!</Text>

            <TouchableOpacity
              style={{ ...styles.openButton, backgroundColor: "#2196F3" }}
              onPress={() => {
                setModalVisible(!modalVisible);
              }}
            >
              <Text style={styles.textStyle}>Hide Modal</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>

      <View style={styles.buttonsCard}>
        <TouchableOpacity style={{ flex: 1 }}>
          <MaterialIcons name={"favorite-outline"} size={23} color="black" />
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

  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  openButton: {
    backgroundColor: "#F194FF",
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
  },
});

export default ProductCard;
