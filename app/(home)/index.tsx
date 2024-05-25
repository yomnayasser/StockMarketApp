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
    <View style={styles.container}>
      <Header source={IMAGES.logo} />
      {/* <SearchBar /> */}
      <Text>{search}</Text>
      {isLoading || isFetching ? (
        <StockListSkeleton />
      ) : (
        <StockList data={data?.results} />
      )}
    </View>
  );
};

export default Home;
