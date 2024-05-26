import React from "react";
import { View, Text, useColorScheme } from "react-native";

import { StockCardStyles } from "./StockCard.styles";
import { tickerDetails } from "@/src/models/getTickerResponse";
import { useThemeColor } from "@/src/hooks/useThemeColor";

type Props = {
  stock: tickerDetails;
};

const StockCard = ({ stock }: Props) => {
  const colorScheme = useColorScheme();
  const themeColors = useThemeColor(colorScheme);
  const styles = StockCardStyles(themeColors.secondary);

  return (
    <View style={styles.container} testID="stockCard">
      <Text style={styles.text}>{stock.ticker}</Text>
      <Text style={styles.text}>{stock.name}</Text>
    </View>
  );
};

export default StockCard;
