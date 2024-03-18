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
      {
        api_symbol: "staked-ether",
        id: "staked-ether",
        large:
          "https://assets.coingecko.com/coins/images/13442/large/steth_logo.png",
        market_cap_rank: 6,
        name: "Lido Staked Ether",
        symbol: "STETH",
        thumb:
          "https://assets.coingecko.com/coins/images/13442/thumb/steth_logo.png",
      },
      {
        api_symbol: "ripple",
        id: "ripple",
        large:
          "https://assets.coingecko.com/coins/images/44/large/xrp-symbol-white-128.png",
        market_cap_rank: 7,
        name: "XRP",
        symbol: "XRP",
        thumb:
          "https://assets.coingecko.com/coins/images/44/thumb/xrp-symbol-white-128.png",
      },
      {
        api_symbol: "usd-coin",
        id: "usd-coin",
        large: "https://assets.coingecko.com/coins/images/6319/large/usdc.png",
        market_cap_rank: 8,
        name: "USDC",
        symbol: "USDC",
        thumb: "https://assets.coingecko.com/coins/images/6319/thumb/usdc.png",
      },
    ],
    exchanges: [],
    icos: [],
    nfts: [],
  };
  return marketList;
};
