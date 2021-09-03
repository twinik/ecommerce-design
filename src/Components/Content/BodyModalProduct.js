import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  Dimensions,
} from "react-native";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const BodyModalProduct = ({ item, setModalVisible, modalVisible }) => {
  return (
    <View style={styles.centeredView}>
      <View style={styles.modalView}>
        <View style={styles.container}>
          <View style={{ flex: 1 }}>
            <Image
              style={styles.img}
              source={{
                uri: item.imgUrl,
              }}
            />
          </View>

          <View style={styles.data}>
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
      </View>
    </View>
  );
};

export default BodyModalProduct;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "blue",
    width: "100%",
    borderRadius: 20,
  },

  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
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
    resizeMode: "contain",
    backgroundColor: "red",
  },

  data: {
    flex: 1,
  },
});
