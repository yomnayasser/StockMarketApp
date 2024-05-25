import { useQuery } from "@tanstack/react-query";
import { queryGetStocks } from "../services";

const useFetchStocks = (searchInput) => {
  console.log("useFetchStocks:>>", searchInput);
  return useQuery({
    queryKey: ["stockList"],
    queryFn: () => queryGetStocks(searchInput),
  });
};
export default useFetchStocks;
