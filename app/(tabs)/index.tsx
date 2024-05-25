import React, { useEffect, useState } from "react";
import { Text, View } from "react-native";

import { IMAGES } from "@/src/assets";
import { Header, SearchBar, StockList } from "@/src/components";
import useFetchStocks from "@/src/hooks/useFetchStocks";
import StockListSkeleton from "@/src/skeletons/StockListSkeleton";
type Props = {};

const Home = (props: Props) => {
  const [searchInput, setSearchInput] = useState("");
  const [onBlueInput, setOnBlurInput] = useState(false);
  const { data, isLoading, refetch, isFetching } = useFetchStocks(searchInput);
  useEffect(() => {
    console.log("helloooo");
    refetch(searchInput);
  }, [searchInput]);
  return (
    <View style={{ flex: 1, backgroundColor: "#1F202E" }}>
      <Header source={IMAGES.logo} />
      <SearchBar setSearchInput={setSearchInput} searchInput={searchInput} />
      {isLoading || isFetching ? (
        <StockListSkeleton />
      ) : (
        <StockList data={data?.results} />
      )}
    </View>
  );
};

export default Home;
