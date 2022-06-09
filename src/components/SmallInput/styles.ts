import { StyleSheet } from "react-native";
import { theme } from "../../global/theme";

export const styles = StyleSheet.create({
  container: {
    width: 48,
    height: 48,
    borderWidth: 1,
    borderRadius: 8,
    backgroundColor: theme.colors.secondary40,
    color: theme.colors.heading,
    fontSize: 13,
    fontFamily: theme.fonts.text400,
    marginRight: 4,
    textAlign: "center",
    borderColor: theme.colors.secondary50,
  },
});
