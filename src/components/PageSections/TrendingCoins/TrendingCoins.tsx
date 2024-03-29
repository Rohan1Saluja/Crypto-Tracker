import React from "react";
import { getTrendingCoins } from "../../../utils/api";
import { Text } from "../../UI/Text";
import "./TrendingCoins.scss";
import { CoinItemModel } from "../../../types/trending/trending.model";
import { PercentageElement } from "../../UI/PercentageElement";

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
          <Text text={`${coin.item.name}`} className="description" />
          <Text
            text={`(${coin.item.symbol})`}
            className="description-mid light-text"
          />
        </div>
        <PercentageElement
          roundedPercentage={roundedPercentage != null ? roundedPercentage : 0}
          className=""
        />
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
