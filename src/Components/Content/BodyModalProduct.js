import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  Dimensions,
  ScrollView,
  FlatList,
} from "react-native";
import {
  AntDesign,
  EvilIcons,
  FontAwesome,
  MaterialIcons,
} from "@expo/vector-icons";

import GenericButton from "../Buttons/GenericButton";
import Close from "../Buttons/Close";
import IconButton from "../Buttons/IconButton";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const sizes = [6, 6.5, 7, 7.5, 8, 8.5, 9, 9.5, 10, 10.5];

const BodyModalProduct = ({ item, setModalVisible, modalVisible }) => {
  const renderItemSize = ({ item }) => {
    <View>
      <Text>{item}</Text>;
    </View>;
  };

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
                <Text style={{ flex: 1, color: "grey" }}>Men's shoes</Text>
                <View
                  style={{ justifyContent: "flex-end", flexDirection: "row" }}
                >
                  <View style={{ justifyContent: "center" }}>
                    <FontAwesome name="star" size={16} color="orange" />
                  </View>
                  <Text style={{ color: "grey" }}> 4.5</Text>
                </View>
              </View>

              <View style={{ flex: 7, flexDirection: "row" }}>
                <Text style={styles.title}>{item.title}</Text>
                <Text style={styles.price}>${item.price}</Text>
                {/* <View style={[styles.center, { flexDirection: "row" }]}>
                  <TouchableOpacity
                    onPress={() => {
                      alert("Share");
                    }}
                  >
                    <EvilIcons name="share-google" size={35} color="black" />
                  </TouchableOpacity>
                  <TouchableOpacity style={{ flex: 1 }}>
                    <AntDesign name="hearto" size={24} color="black" />
                  </TouchableOpacity>
                </View> */}
              </View>

              <View style={styles.containerSizes}>
                <Text style={{ fontWeight: "bold", fontSize: 15 }}>Sizes:</Text>
                <FlatList
                  data={sizes}
                  horizontal={true}
                  renderItem={renderItemSize}
                  keyExtractor={(index) => index}
                />
                {/*                 <View style={{ flexDirection: "row" }}>
                  {sizes.map((i) => (
                    <TouchableOpacity
                      style={{
                        flex: 1,
                        backgroundColor: "lightgrey",
                        borderRadius: 10,
                        marginHorizontal: 3,
                      }}
                    >
                      <Text>{i}</Text>
                    </TouchableOpacity>
                  ))}
                </View> */}
              </View>
            </ScrollView>
          </View>

          <View style={styles.containerButtons}>
            <IconButton
              icon={
                <MaterialIcons name="favorite-border" size={25} color="black" />
              }
              style={styles.fav}
            />
            <GenericButton
              title="Add to Cart"
              style={styles.buyNow}
              styleText={{ fontWeight: "bold" }}
            />
          </View>
        </View>
      </View>
    </View>
  );
};

export default BodyModalProduct;

const styles = StyleSheet.create({
  center: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },

  container: {
    flex: 1,
    width: "100%",
    borderRadius: 20,
    padding: 10,
  },

  containerBody: {
    flex: 5,
    marginVertical: 10,
    marginTop: 20,
    margin: 2,
  },

  containerFavShare: {
    flex: 4,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },

  containerSizes: {
    flex: 2,
    marginTop: 15,
    backgroundColor: "pink",
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

  title: {
    flex: 3,
    fontSize: 25,
    fontWeight: "bold",
  },

  price: {
    fontSize: 22,
  },

  img: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
    borderRadius: 20,
    backgroundColor: "#F5F5F5",
    position: "absolute",
  },

  fav: {
    flex: 1,
    backgroundColor: "#F5F5F5",
    borderRadius: 30,
    height: "90%",
  },
  buyNow: {
    flex: 4,
    height: "90%",
    backgroundColor: "darkorange",
    borderRadius: 30,
    marginLeft: 5,
  },
});
