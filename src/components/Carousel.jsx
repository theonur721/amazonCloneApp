import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import Swiper from "react-native-swiper";
import { CarouselData } from "../data/CarouselData";

const Carousel = () => {
  return (
    <View style={styles.container}>
      <Swiper
        style={styles.wrapper}
        showsPagination={false}
        showsButtons={false}
        autoplay={true}
      >
        {CarouselData.map((item) => (
          <View>
            <Image style={styles.imgStyle} source={item.image} />
          </View>
        ))}
      </Swiper>
    </View>
  );
};

export default Carousel;

const styles = StyleSheet.create({
  container: { position: "relative" },
  wrapper: { height: 300 },
  imgStyle: { width: "100%", height: 250 },
});
