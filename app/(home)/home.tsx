import React, { useEffect } from "react";
import { Text, View } from "react-native";
import { useSelector } from "react-redux";

import styles from "./styles";
import { IMAGES } from "@/src/assets";
import { RootState } from "@/src/store/store";
import useFetchStocks from "@/src/hooks/useFetchStocks";
import { Header, SearchBar, StockList } from "@/src/components";
import StockListSkeleton from "@/src/skeletons/StockListSkeleton";

const Home = () => {
  const { search } = useSelector((state: RootState) => state.search);

  const { data, isLoading, refetch, isFetching } = useFetchStocks(search);
  useEffect(() => {
    refetch(search);
  }, [search]);

  return (
    <View style={styles.homeContainer}>
      <Header source={IMAGES.logo} />
      <SearchBar />
      {isLoading || isFetching ? (
        <StockListSkeleton />
      ) : (
        <>
          {data?.results.length === 0 ? (
            <Text style={styles.text}>No Stocks Available</Text>
          ) : (
            <StockList data={data?.results} />
          )}
        </>
      )}
    </View>
  );
};

export default Home;
