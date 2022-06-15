import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { color } from "../../../config/color";

const DetailItem = ({ item, index }) => {
  return (
    <View index={index} style={styles.container}>
      <Image
        style={styles.image}
        source={{ uri: item.image }}
      />
      <Text style={styles.title}>{item?.name}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderBottomWidth: 0.5,
    borderColor: "#8d8686",
    padding: 15,
    margin: 10,
    flexDirection: "row",
    alignItems: "center",
  },
  image: {
    width: 40,
    height: 40,
    borderRadius: 20,
    resizeMode: "stretch",
  },
  title: {
    fontSize: 16,
    fontWeight: "600",
    color: color.primary,
    flex: 1,
    paddingLeft: 20,
  },
});

export default DetailItem;
