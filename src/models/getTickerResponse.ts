export interface tickerDetails {
  ticker: string;
  name: string;
  market: string;
  locale: string;
  primary_exchange: string;
  type: string;
  active: boolean;
  currency_name: string;
  cik: string;
  composite_figi: string;
  share_class_figi: string;
  last_updated_utc: string;
}

export interface getTickerResponse {
  results: tickerDetails[];
  status: string;
  request_id: string;
  count: 100;
  next_url: string;
}
