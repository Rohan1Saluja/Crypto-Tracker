import coinGeckoApi from "./coinGeckoApiConfig";

export const getPingStatus = async () => {
  let response = await coinGeckoApi.get(`/ping`);
  return response?.data;
};

export const getTrendingCoins = async () => {
  let response = await coinGeckoApi.get(`/search/trending`);
  return response?.data;
};

export const getCoinPrice = async (
  ids: string,
  vs_currencies?: string,
  include_24hr_change?: boolean,
  precision?: string
) => {
  let response = await coinGeckoApi.get(
    `/simple/price?ids=${ids}&vs_currencies=${vs_currencies}&include_24hr_change=${include_24hr_change}&precision=${precision}`
  );
  return response?.data;
};

export const getSearchedCoinTerm = async (searchedTerm: string) => {
  let response = await coinGeckoApi.get(`/search?query=${searchedTerm}`);
  return response?.data;
};

export const getCoinTechnicals = async (
  id: string,
  includeMarketData: boolean = true,
  includeCommunityData: boolean = true,
  includeSparkline: boolean = true
) => {
  let response = await coinGeckoApi.get(
    `/coins/${id}?localization=false&market_data=${includeMarketData}&community_data=${includeCommunityData}&sparkline=${includeSparkline}`
  );
  return response?.data;
};
