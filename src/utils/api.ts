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
