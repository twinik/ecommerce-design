import React from "react";
import { StyleSheet, Text, View, Modal } from "react-native";

import BodyModalProduct from "../Content/BodyModalProduct";

const ModalProduct = ({ item, setModalVisible, modalVisible }) => {
  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={modalVisible}
      onRequestClose={() => {
        Alert.alert("Modal has been closed.");
      }}
    >
      <BodyModalProduct
        item={item}
        setModalVisible={setModalVisible}
        modalVisible={modalVisible}
      />
    </Modal>
  );
};

export default ModalProduct;

const styles = StyleSheet.create({});
