import React from "react";
import { getTrendingCoins } from "../../../utils/api";
import { Text } from "../../UI/Text";
import "./TrendingCoins.scss";
import { CoinItemModel } from "../../../types/trending/trending.model";
import { ArrowDropDown, ArrowDropUp } from "@mui/icons-material";

export const TrendingCoins: React.FC = () => {
  const [trendingCoins, setTrendingCoins] = React.useState<CoinItemModel[]>();

  const fetchTrendingCoins = React.useCallback(async () => {
    await getTrendingCoins()
      .then((resp) => {
        // console.log("Response:", resp.coins);
        setTrendingCoins(resp.coins);
      })
      .catch((error) => {
        console.log("Error fetching Trends");
      });
  }, []);

  const renderCoinDetails = (coin: CoinItemModel, index: number) => {
    const priceChangePercentage =
      coin.item.data?.price_change_percentage_24h?.usd;
    const roundedPercentage =
      priceChangePercentage != null
        ? Number(priceChangePercentage.toFixed(2))
        : null;

    return (
      <div className="coin-details" key={index}>
        <div className="name">
          <img src={coin.item.small} alt="" className="coin-logo" />
          <Text
            text={`${coin.item.name} (${coin.item.symbol})`}
            className="description"
          />
        </div>
        <div
          className={`price-percentage ${
            roundedPercentage != null && roundedPercentage >= 0
              ? "positive"
              : "negative"
          }`}
        >
          {roundedPercentage != null && roundedPercentage > 0 ? (
            <ArrowDropUp className="arrow-up" />
          ) : (
            <ArrowDropDown className="arrow-down" />
          )}
          <Text
            text={`${roundedPercentage != null ? roundedPercentage : "-"}%`}
            className={`description-small text-element ${
              roundedPercentage != null &&
              roundedPercentage < 0 &&
              "negative-text"
            }`}
          />
        </div>
      </div>
    );
  };

  React.useEffect(() => {
    fetchTrendingCoins();
  }, []);
  return (
    <div className="trending-coins">
      <div className="header">
        <Text text="Trending Coins (24h)" className="description-bold" />
      </div>
      <div className="coin-info">
        {trendingCoins
          ?.slice(0, 3)
          .map((coin, index) => renderCoinDetails(coin, index))}
      </div>
    </div>
  );
};
