import React from "react";
import { View, Text } from "react-native";
import { useStyles } from "react-native-unistyles";

import StockCardStyle from "./StockCard.styles";
import { tickerDetails } from "@/src/models/getTickerResponse";

type Props = {
  stock: tickerDetails;
};

const StockCard = ({ stock }: Props) => {
  const { styles } = useStyles(StockCardStyle);

  return (
    <View style={styles.container} testID="stockCard">
      <Text style={styles.text}>{stock.ticker}</Text>
      <Text style={styles.text}>{stock.name}</Text>
    </View>
  );
};

export default StockCard;
