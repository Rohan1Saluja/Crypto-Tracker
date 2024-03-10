import { SearchedMarketModel } from "../../../types/coins/coins.model";

export const getDefaultMarketList = () => {
  const marketList: SearchedMarketModel = {
    categories: [],

    coins: [
      {
        api_symbol: "bitcoin",
        id: "bitcoin",
        large: "https://assets.coingecko.com/coins/images/1/large/bitcoin.png",
        market_cap_rank: 1,
        name: "Bitcoin",
        symbol: "BTC",
        thumb: "https://assets.coingecko.com/coins/images/1/thumb/bitcoin.png",
      },
      {
        api_symbol: "etherium",
        id: "ethereum",
        large:
          "https://assets.coingecko.com/coins/images/279/large/ethereum.png",
        market_cap_rank: 2,
        name: "Etherium",
        symbol: "ETH",
        thumb:
          "https://assets.coingecko.com/coins/images/279/thumb/ethereum.png",
      },
      {
        api_symbol: "bitcoin",
        id: "bitcoin",
        large: "https://assets.coingecko.com/coins/images/1/large/bitcoin.png",
        market_cap_rank: 1,
        name: "Bitcoin",
        symbol: "BTC",
        thumb: "https://assets.coingecko.com/coins/images/1/thumb/bitcoin.png",
      },
    ],
    exchanges: [],
    icos: [],
    nfts: [],
  };
  return marketList;
};
