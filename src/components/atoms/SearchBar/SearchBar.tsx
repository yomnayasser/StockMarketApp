import React, { useRef } from "react";
import { SearchBar as SearchBarRN } from "@rneui/themed";
import { useDispatch, useSelector } from "react-redux";

import { RootState } from "@/src/store/store";
import { setSearch } from "@/src/store/searchReducer";
import { useThemeColor } from "@/src/hooks/useThemeColor";
import { SearchBarStyles } from "./SearchBar.styles";
import { useColorScheme } from "react-native";

const SearchBar = () => {
  const { search } = useSelector((state: RootState) => state.search);
  const dispatch = useDispatch();
  const searchRef = useRef();
  const colorScheme = useColorScheme();
  const themeColors = useThemeColor(colorScheme);

  const styles = SearchBarStyles(themeColors);

  return (
    <SearchBarRN
      round
      placeholderTextColor={themeColors.placeholder}
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
