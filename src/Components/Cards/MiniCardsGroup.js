import React from "react";
import { View, ScrollView, StyleSheet } from "react-native";
import MiniCard from "./MiniCard";

const MiniCardsGroup = () => {
  return (
    <View style={styles.container}>
      <MiniCard iconGroup={"MI"} name={"category"} text={"Category"} />
      <MiniCard iconGroup={"MCI"} name={"compare"} text={"Compare"} />
      <MiniCard iconGroup={"MCI"} name={"sale"} text={"Sales"} />
      <MiniCard iconGroup={"MI"} name={"local-offer"} text={"Offers"} />
    </View>
  );
};

export default MiniCardsGroup;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-around",
    width: "90%",
  },
});
