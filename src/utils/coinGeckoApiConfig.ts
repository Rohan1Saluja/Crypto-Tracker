import axios from "axios";

let ip = import.meta.env.VITE_APP_COIN_GECKO_API_URL;

const headers: any = {
  "Access-Control-Allow-Credentials": true,
};

export const rootPath = ip + "";

const coinGeckoApi = axios.create({
  baseURL: rootPath,
  headers: headers,
});

// Add a response interceptor
coinGeckoApi.interceptors.response.use(
  function (response: any) {
    return response;
  },
  function (error: any) {
    if (error && error.response && error.response.status === 401) {
      console.log(error);
    }
    return Promise.reject(error);
  }
);

export default coinGeckoApi;
