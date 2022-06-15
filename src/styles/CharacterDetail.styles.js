import { StyleSheet } from "react-native";
import { color } from "../config/color";

export const styles = StyleSheet.create({
  title: {
    color: color.white,
    fontSize: 25,
    fontWeight: "bold",
    textAlign: "center",
    paddingBottom: 10,
  },
  imageContainer: {
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    width: 150,
    height: 150,
    borderRadius: 75,
    resizeMode: "stretch",
  },
  infoTitle: {
    color: color.secondary,
    fontSize: 17,
    fontWeight: "500",
    padding: 10,
  },
  infoContainer: {
    backgroundColor: color.gray,
  },
  episodesTitle: {
    color: color.secondary,
    fontSize: 17,
    fontWeight: "500",
    padding: 10,
    marginTop: 20,
  },
  detailContainer: {
    backgroundColor: color.gray,
    flex: 1,
  },
});
