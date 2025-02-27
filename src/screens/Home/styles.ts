import { StyleSheet } from "react-native";
import { getStatusBarHeight } from "react-native-iphone-x-helper";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    width: "100%",
    paddingHorizontal: 24,
    flexDirection: "row",
    justifyContent: "space-between",
    margintTop: getStatusBarHeight() + 26,
    marginBottom: 42,
  },
  matches: {
    marginLeft: 24,
    marginTop: 24,
  },
});
