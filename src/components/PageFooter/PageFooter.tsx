import React from "react";
import { getTrendingCoins } from "../../utils/api";
import { Text } from "../UI/Text";
import "./PageFooter.scss";
import { CoinItemModel } from "../../types/trending/trending.model";
import { PageLoader } from "../UI/PageLoader";
import { ChartPreviews } from "./ChartPreviews";

export const PageFooter: React.FC = () => {
  const [trendingCoins, setTrendingCoins] = React.useState<CoinItemModel[]>();
  const [startIndex, setStartIndex] = React.useState(0);
  const [loading, setLoading] = React.useState(false);
  const chartsPerPage = 5;

  const fetchTrendingCoins = React.useCallback(async () => {
    await getTrendingCoins()
      .then((resp) => {
        setLoading(true);
        setTrendingCoins(resp.coins);
      })
      .catch((error) => {
        console.log("Error fetching Trends");
      })
      .finally(() => {
        setLoading(false);
      });
  }, [getTrendingCoins, setTrendingCoins]);

  React.useEffect(() => {
    fetchTrendingCoins();
    console.log("Retry");
  }, [getTrendingCoins]);
  return (
    <div className="footer-element">
      <div className="liked-list">
        <Text text="You May Also Like" className="sub-heading" />
        <div className="chart-previews">
          {trendingCoins
            ?.slice(startIndex, startIndex + chartsPerPage)
            .map((coin, index) => (
              <ChartPreviews coin={coin} key={index} />
            ))}
        </div>
      </div>
      <div className="trending-list">
        <Text text="Trending Coins" className="sub-heading" />
        <div className="chart-previews">
          {trendingCoins
            ?.slice(startIndex, startIndex + chartsPerPage)
            .map((coin, index) => (
              <ChartPreviews coin={coin} key={index} />
            ))}
        </div>
      </div>
      {loading && <PageLoader className="overlay" />}
    </div>
  );
};
