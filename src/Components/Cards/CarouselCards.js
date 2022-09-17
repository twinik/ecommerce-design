import React from "react";
import { View, Text } from "react-native";
import CarouselCardItem, { SLIDER_WIDTH, ITEM_WIDTH } from "./CarouselCardItem";
import data from "../Data/Data";

const CarouselCards = () => {
  const [index, setIndex] = React.useState(0);
  const isCarousel = React.useRef(null);

  return (
    <View>
      <Text>CarouselCards</Text>
    </View>
  );
};

export default CarouselCards;
