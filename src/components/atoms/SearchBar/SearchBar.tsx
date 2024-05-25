import React from "react";
import { SearchBar as SearchBarRN } from "@rneui/themed";

import styles from "./SearchBar.styles";
type Props = {};

const SearchBar = ({ searchInput, setSearchInput, setOnBlurInput }: Props) => {
  return (
    <SearchBarRN
      round
      placeholderTextColor={"#4D4E5D"}
      searchIcon={false}
      placeholder="Search for stocks"
      onChangeText={setSearchInput}
      containerStyle={styles.containerStyle}
      inputContainerStyle={styles.inputContainerStyle}
      value={searchInput}
      onEndEditing={() => setOnBlurInput(true)}
    />
  );
};

export default SearchBar;
