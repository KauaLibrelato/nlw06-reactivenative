import { StyleSheet } from "react-native";
import { getBottomSpace } from "react-native-iphone-x-helper";
import { theme } from "../../global/theme";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  label: {
    fontSize: 18,
    fontFamily: theme.fonts.title700,
    color: theme.colors.heading,
  },
  form: {
    paddingHorizontal: 24,
    marginTop: 32,
  },
  select: {
    width: "100%",
    height: 68,
    flexDirection: "row",
    borderWidth: 1,
    borderColor: theme.colors.secondary50,
    borderRadius: 8,
    alignItems: "center",
    paddingRight: 25,
    overflow: "hidden",
  },
  selectBody: {
    flex: 1,
    alignItems: "center",
  },
  image: {
    width: 64,
    height: 68,
    borderRadius: 8,
    borderColor: theme.colors.secondary50,
    backgroundColor: theme.colors.secondary50,
    borderWidth: 1,
  },
  field: {
    marginTop: 32,
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  column: {
    flexDirection: "row",
    alignItems: "center",
  },
  divider: {
    marginRight: 4,
    fontSize: 15,
    fontFamily: theme.fonts.text500,
    color: theme.colors.highlight,
  },
  textArea: {
    marginHorizontal: 24,
    marginTop: 15,
    marginBottom: 56,
  },
  footer: {
    paddingHorizontal: 24,
    marginVertical: 20,
    marginBottom: 56,
  },
});
