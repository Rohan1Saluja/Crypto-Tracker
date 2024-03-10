export type SearchedMarketModel = {
  categories: CategoryModel[];
  coins: CoinInfoModel[];
  exchanges: ExchangeModel[];
  icos: ICOModel[];
  nfts: NFTModel[];
};

export type CategoryModel = {
  id: number;
  name: string;
};

export type CoinInfoModel = {
  api_symbol: string;
  id: string;
  large: string;
  market_cap_rank: number;
  name: string;
  symbol: string;
  thumb: string;
};

export type ExchangeModel = {
  id: string;
  large: string;
  market_type: string;
  name: string;
  thumb: string;
};

export type ICOModel = {};

export type NFTModel = {
  id: string;
  name: string;
  symbol: string;
  thumb: string;
};
