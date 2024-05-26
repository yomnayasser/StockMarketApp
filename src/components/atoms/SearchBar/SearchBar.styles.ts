import { StyleSheet } from "react-native";

export const SearchBarStyles = (themeColors) =>
  StyleSheet.create({
    containerStyle: {
      marginVertical: 10,
      backgroundColor: themeColors.primary,
      marginTop: 10,
      marginBottom: 5,
      borderTopColor: themeColors.primary,
      borderBottomColor: themeColors.primary,
      marginHorizontal: 10,
    },
    inputContainerStyle: {
      backgroundColor: themeColors.secondary,
      borderColor: "transparent",
    },
  });
