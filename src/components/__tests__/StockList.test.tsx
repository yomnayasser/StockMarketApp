import React from "react";
import { render } from "@testing-library/react-native";
import { StockList } from "../organisms";

const mockData = [
  {
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
  },
];

describe("StockList", () => {
  it("should render the list of stocks correctly", () => {
    const { queryAllByTestId } = render(<StockList data={mockData} />);

    const stockCards = queryAllByTestId("stockList");

    expect(stockCards).toHaveLength(mockData.length);
  });
});
