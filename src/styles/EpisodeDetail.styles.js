import { StyleSheet } from "react-native";
import { color } from "../config/color";

export const styles = StyleSheet.create({
  infoTitle: {
    color: color.secondary,
    fontSize: 17,
    fontWeight: "500",
    padding: 10,
  },
  infoCardContainer: {
    backgroundColor: color.gray,
  },
  characterTitle: {
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
