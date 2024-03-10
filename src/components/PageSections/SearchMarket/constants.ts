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
        api_symbol: "tether",
        id: "tether",
        large: "https://assets.coingecko.com/coins/images/325/large/Tether.png",
        market_cap_rank: 3,
        name: "Tether",
        symbol: "USDT",
        thumb: "https://assets.coingecko.com/coins/images/325/thumb/Tether.png",
      },
      {
        api_symbol: "binancecoin",
        id: "binancecoin",
        large:
          "https://assets.coingecko.com/coins/images/825/large/bnb-icon2_2x.png",
        market_cap_rank: 4,
        name: "BNB",
        symbol: "BNB",
        thumb:
          "https://assets.coingecko.com/coins/images/825/thumb/bnb-icon2_2x.png",
      },
      {
        api_symbol: "solana",
        id: "solana",
        large:
          "https://assets.coingecko.com/coins/images/4128/large/solana.png",
        market_cap_rank: 5,
        name: "Solana",
        symbol: "SOL",
        thumb:
          "https://assets.coingecko.com/coins/images/4128/thumb/solana.png",
      },
    ],
    exchanges: [],
    icos: [],
    nfts: [],
  };
  return marketList;
};
