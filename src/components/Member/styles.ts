import { StyleSheet } from 'react-native';
import { theme } from '../../global/theme';

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: "row",
    alignItems: "center",
  },
  title: {
      fontSize: 18,
      fontFamily: theme.fonts.title700,
      color: theme.colors.heading
  },
  status:{
     flexDirection: "row",
     alignItems: "center",
     marginBottom: 14
  },
  bulletStatus:{
      width:8,
      height: 8,
      borderRadius: 4,
      marginRight: 9
  },
  nameStatus:{
    fontSize: 13,
    fontFamily: theme.fonts.text400,
    color: theme.colors.highlight
  }
});