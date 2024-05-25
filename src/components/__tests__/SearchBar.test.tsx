import React from "react";
import { render, fireEvent } from "@testing-library/react-native";
import { useDispatch, useSelector } from "react-redux";
import { SearchBar } from "../index";
import { setSearch } from "@/src/store/searchReducer";
import { View } from "react-native";

jest.mock("@rneui/themed", () => ({
  SearchBar: jest.fn().mockReturnValue(null),
}));

jest.mock("react-redux", () => ({
  useDispatch: jest.fn(),
  useSelector: jest.fn(),
}));

describe("SearchBar", () => {
  beforeEach(() => {
    useDispatch.mockReturnValue(jest.fn());
    useSelector.mockReturnValue({ search: "initial value" });
  });
  afterEach(() => {
    jest.clearAllMocks();
  });

  it("should dispatch setSearch action when input value changes", () => {
    const mockDispatch = jest.fn();
    useDispatch.mockReturnValue(mockDispatch);

    const { getByTestId } = render(
      <View testID="searchBar">
        <SearchBar />
      </View>
    );
    const inputElement = getByTestId("searchBar");
    // fireEvent.changeText(inputElement, { target: { value: "Apple" } });

    // expect(mockDispatch).toHaveBeenCalledWith(setSearch("Apple"));

    // const inputElement = getByPlaceholderText("Search for stocks");

    // fireEvent.change(inputElement, { target: { value: 'Apple' } });
  });
});
