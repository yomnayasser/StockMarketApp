import { View, Text, FlatList } from "react-native";
import React from "react";
import { StockCard } from "../../molecules";
import {
  getTickerResponse,
  tickerDetails,
} from "@/src/models/getTickerResponse";

type Props = {
  data: getTickerResponse["results"];
};

const StockList = ({ data }: Props) => {
  const renderCard = ({ item }) => <StockCard stock={item} />;
  return (
    <View
      style={{
        justifyContent: "center",
        alignSelf: "center",
        marginHorizontal: 10,
      }}
    >
      <FlatList
        data={data}
        renderItem={renderCard}
        keyExtractor={(item) => item.id}
        numColumns={2}
      />
    </View>
  );
};

export default StockList;
