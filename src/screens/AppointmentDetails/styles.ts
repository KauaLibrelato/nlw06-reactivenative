import { StyleSheet } from "react-native";
import { getBottomSpace } from "react-native-iphone-x-helper";
import { theme } from "../../global/theme";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  banner: {
    width: "100%",
    height: 234,
  },
  bannerContent: {
    justifyContent: "flex-end",
    flex: 1,
    paddingHorizontal: 24,
    marginBottom: 30,
  },
  title: {
    fontSize: 28,
    color: theme.colors.heading,
    fontFamily: theme.fonts.title700,
    paddingBottom: 12,
  },
  subtitle: {
    fontSize: 13,
    color: theme.colors.heading,
    fontFamily: theme.fonts.text400,
    lineHeight: 21,
  },
  members: {
    marginLeft: 24,
    marginTop: 27,
  },
  footer: {
    paddingHorizontal: 24,
    paddingVertical: 20,
    marginBottom: getBottomSpace(),
  },
});
