export type TrendingCoinModel = {
  categories: CategoryModel[];
  coins: CoinItemModel[];
  nfts: NftModel[];
};

export type CategoryModel = {
  coins_count: number;
  data: any;
  id: number;
  market_cap_1h_change: number;
  name: string;
  slug: string;
};

export type CoinItemModel = {
  item: CoinModel;
};

export type CoinModel = {
  coin_id: number;
  data: any;
  id: string;
  large: string;
  market_cap_rank: number;
  name: string;
  price_btc: number;
  score: number;
  slug: string;
  small: string;
  symbol: string;
  thumb: string;
};

export type NftModel = {
  data: any;
  floor_price_24h_percentage_change: number;
  floor_price_in_native_currency: number;
  id: string;
  name: string;
  native_currency_symbol: string;
  nft_contract_id: number;
  symbol: string;
  thumb: string;
};
