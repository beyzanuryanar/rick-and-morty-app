import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";
import { color } from "../../../config/color";

const EpisodeListItem = ({ item, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <Text style={styles.itemTitle}>{item?.name}</Text>
      <Text style={styles.itemDate}>{item?.air_date}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    borderBottomWidth: 0.5,
    borderColor: color.secondary,
    padding: 15,
    margin: 10,
    flexDirection: "row",
    alignItems: "center",
  },
  itemTitle: {
    fontSize: 16,
    fontWeight: "600",
    color: color.white,
    flex: 1,
  },
  itemDate: {
    color: color.secondary,
  },
});

export default EpisodeListItem;
