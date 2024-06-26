import { StyleSheet } from "react-native";

export const StockCardStyles = (background: string) =>
  StyleSheet.create({
    container: {
      backgroundColor: background,
      marginHorizontal: 10,
      marginVertical: 10,
      paddingHorizontal: 15,
      paddingVertical: 15,
      borderRadius: 10,
      width: "45%",
    },
    text: {
      color: "white",
      textAlign: "center",
      paddingVertical: 10,
    },
  });
