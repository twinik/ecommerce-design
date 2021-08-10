import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";

import products from "../Data/Products";
import ProductCard from "../Cards/ProductCard";

const ProductsList = () => {
  const renderItem = ({ item }) => (
    <View>
      <Text style={styles.categoryTitle}>{item.title}</Text>
      <FlatList
        data={item.products}
        horizontal={true}
        renderItem={renderItemProduct}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );

  const renderItemProduct = ({ item }) => (
    <ProductCard onPress={() => alert(item.id)} item={item} />
  );

  return (
    <View>
      <FlatList
        data={products}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
};

export default ProductsList;

const styles = StyleSheet.create({
  category: {
    marginHorizontal: "3%",
  },
  categoryTitle: {
    fontSize: 16,
    marginHorizontal: "5%",
    fontStyle: "italic",
    fontWeight: "bold",
  },
});
