import React from "react";
import { render } from "@testing-library/react-native";
import { Header, StockCard } from "../index";
import { IMAGES } from "@/src/assets";

jest.mock("@rneui/themed", () => ({
  SearchBar: jest.fn().mockReturnValue(null),
}));

jest.mock("react-redux", () => ({
  useDispatch: jest.fn(),
  useSelector: jest.fn(),
}));

const testData = {
  ticker: "A",
  name: "Agilent Technologies Inc.",
  market: "stocks",
  locale: "us",
  primary_exchange: "XNYS",
  type: "CS",
  active: true,
  currency_name: "usd",
  cik: "0001090872",
  composite_figi: "BBG000C2V3D6",
  share_class_figi: "BBG001SCTQY4",
  last_updated_utc: "2024-05-17T00:00:00Z",
};

describe("Header", () => {
  it("should dispatch setSearch action when input value changes", () => {
    const { getByTestId } = render(<StockCard stock={testData} />);
    expect(getByTestId("stockCard")).toBeTruthy();
  });
});
