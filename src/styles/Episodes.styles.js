import {StyleSheet} from 'react-native';
import { color } from "../config/color"

export const styles = StyleSheet.create({
  episodeContainer: {
    flex: 1,
  },
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
