import React from "react";
import { SearchBar as SearchBarRN } from "@rneui/themed";
import { useDispatch, useSelector } from "react-redux";

import styles from "./SearchBar.styles";
import { RootState } from "@/src/store/store";
import { setSearch } from "@/src/store/searchReducer";

const SearchBar = () => {
  const { search } = useSelector((state: RootState) => state.search);
  const dispatch = useDispatch();

  return (
    <SearchBarRN
      round
      placeholderTextColor={"#4D4E5D"}
      searchIcon={false}
      placeholder="Search for stocks"
      onChangeText={(text) => {
        dispatch(setSearch(text));
      }}
      containerStyle={styles.containerStyle}
      inputContainerStyle={styles.inputContainerStyle}
      value={search}
    />
  );
};

export default SearchBar;
