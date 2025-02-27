import { StyleSheet } from 'react-native';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';
import { theme } from '../../global/theme';

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 104,
    paddingTop: getStatusBarHeight(),
    paddingHorizontal: 24,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center"
  },
  title:{
    flex:1,
    color: theme.colors.heading,
    fontSize:20,
    fontFamily: theme.fonts.title700,
    textAlign: "center"
  }
});