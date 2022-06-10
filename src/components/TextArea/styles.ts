import { StyleSheet } from "react-native";
import { theme } from "../../global/theme";

export const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 95,
    borderWidth: 1,
    borderRadius: 8,
    backgroundColor: theme.colors.secondary40,
    color: theme.colors.heading,
    fontSize: 13,
    fontFamily: theme.fonts.text400,
    marginRight: 4,
    paddingHorizontal:16,
    paddingTop:16,
    textAlignVertical: 'top',
    borderColor: theme.colors.secondary50,
  },
});
