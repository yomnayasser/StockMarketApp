import React from "react";
import { View, FlatList } from "react-native";

import { StockCard } from "../../molecules";
import styles from "./StockList.styles";
import { getTickerResponse } from "@/src/models/getTickerResponse";

type Props = {
  data: getTickerResponse["results"];
};

const StockList = ({ data }: Props) => {
  const renderCard = ({ item }) => <StockCard stock={item} />;
  return (
    <View style={styles.container} testID="stockList">
      <FlatList
        data={data}
        renderItem={renderCard}
        keyExtractor={(item) => item.cik}
        numColumns={2}
      />
    </View>
  );
};

export default StockList;
