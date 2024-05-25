import { useQuery } from "@tanstack/react-query";
import { queryGetStocks } from "../services";

const useFetchStocks = (searchInput: string) => {
  return useQuery({
    queryKey: ["stockList"],
    queryFn: () => queryGetStocks(searchInput),
  });
};
export default useFetchStocks;
