import { httpClient } from "./httpClient";

const queryGetStocks = (searchInput: string) => {
  console.log("first:>>", searchInput);
  return httpClient
    .get(
      `https://api.polygon.io/v3/reference/tickers?search=${searchInput}&active=true&limit=100&apiKey=1rT57WAieitk8n8dXQh9IhJI19lOgIPn`
    )
    .then((res) => {
      return res.data;
    });
};
export default queryGetStocks;
