import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  Dimensions,
  ScrollView,
} from "react-native";
import { AntDesign, EvilIcons } from "@expo/vector-icons";

import GenericButton from "../Buttons/GenericButton";
import Close from "../Buttons/Close";
import IconButton from "../Buttons/IconButton";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const BodyModalProduct = ({ item, setModalVisible, modalVisible }) => {
  return (
    <View style={styles.centeredView}>
      <View style={styles.modalView}>
        <View style={styles.container}>
          <View style={{ flex: 3, alignItems: "flex-end" }}>
            <Image
              style={styles.img}
              source={{
                uri: item.imgUrl,
              }}
            />
            <Close
              onPress={() => setModalVisible(!modalVisible)}
              style={{ margin: 5 }}
            />
          </View>

          <View style={styles.containerBody}>
            <ScrollView>
              <View style={{ flex: 1, flexDirection: "row" }}>
                <View style={{ flex: 7 }}>
                  <Text style={{ fontSize: 25, fontWeight: "bold" }}>
                    {item.title}
                  </Text>
                  <Text style={{ fontSize: 22 }}>${item.price}</Text>
                </View>

                <View style={styles.containerFavShare}>
                  <IconButton
                    icon={<AntDesign name="hearto" size={24} color="black" />}
                    style={[styles.favShare, { marginRight: 1 }]}
                  />
                  <IconButton
                    icon={
                      <EvilIcons name="share-google" size={35} color="black" />
                    }
                    style={[styles.favShare, { marginLeft: 1 }]}
                  />
                </View>
              </View>
            </ScrollView>
          </View>

          <View style={styles.containerButtons}>
            <GenericButton
              title="Add to Cart"
              style={styles.addCart}
              styleText={{ color: "black" }}
            />
            <GenericButton title="Buy Now" style={styles.buyNow} />
          </View>
        </View>
      </View>
    </View>
  );
};

export default BodyModalProduct;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    borderRadius: 20,
    padding: 10,
  },

  containerBody: {
    flex: 5,
    marginVertical: 5,
  },

  containerFavShare: {
    flex: 4,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },

  containerButtons: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },

  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.3)",
  },

  modalView: {
    width: "85%",
    height: "90%",
    backgroundColor: "white",
    borderRadius: 20,
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

  img: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
    borderRadius: 20,
    backgroundColor: "#F5F5F5",
    position: "absolute",
  },

  addCart: {
    width: "48%",
    height: "90%",
    backgroundColor: "#F5F5F5",
    borderRadius: 10,
    marginRight: 5,
  },
  buyNow: {
    width: "48%",
    height: "90%",
    backgroundColor: "darkorange",
    borderRadius: 10,
    marginLeft: 5,
  },

  favShare: {
    backgroundColor: "#F5F5F5",
    borderRadius: 10,
    height: "60%",
    width: "40%",
    marginRight: 1,
  },
});
