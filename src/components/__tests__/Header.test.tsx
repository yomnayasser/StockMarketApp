import React from "react";
import { render } from "@testing-library/react-native";
import { Header } from "../index";
import { IMAGES } from "@/src/assets";

jest.mock("@rneui/themed", () => ({
  SearchBar: jest.fn().mockReturnValue(null),
}));

jest.mock("react-redux", () => ({
  useDispatch: jest.fn(),
  useSelector: jest.fn(),
}));

describe("Header", () => {
  it("should dispatch setSearch action when input value changes", () => {
    const { getByTestId } = render(<Header source={IMAGES.logo} />);
    const inputElement = getByTestId("header");
  });
});
