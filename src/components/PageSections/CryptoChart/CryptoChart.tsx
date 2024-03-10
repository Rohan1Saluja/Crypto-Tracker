import { Button } from "@mui/material";
import { Text } from "../../UI/Text";
import "./CryptoChart.scss";
import React from "react";
import { getCoinPrice } from "../../../utils/api";
import { PageLoader } from "../../UI/PageLoader";
import { TradingViewWidget } from "../../UI/TradingViewWidget";
import { formatCurrency } from "./utils";
import { PercentageElement } from "../../UI/PercentageElement";
import { CoinInfoModel } from "../../../types/coins/coins.model";

interface Props {
  selectedCoin: CoinInfoModel;
  vs_currencies: string;
  include_24hr_change: boolean;
  precision: string;
}

export const CryptoChart: React.FC<Props> = ({
  selectedCoin,
  vs_currencies,
  include_24hr_change,
  precision,
}) => {
  const [activeTimeline, setActiveTimeline] = React.useState("1H");
  const [coinPriceInfo, setCoinPriceInfo] = React.useState<any[]>();
  const timelines = ["1H", "1D", "1W", "1M", "3M", "6M", "12M", "ALL"];
  const [loading, setLoading] = React.useState(false);

  const handleTimelineClick = (timeline: string) => {
    setActiveTimeline(timeline);
    // switch (timeline) {
    //     case "Overview":
    //       return <Overview />;
    //     case "Fundamentals":
    //       return <Overview />;
    //     case "News Insights":
    //       return <Overview />;
    //     case "Sentiments":
    //       return <Overview />;
    //     case "Team":
    //       return <Overview />;
    //     case "Technicals":
    //       return <Overview />;
    //     case "Tokenomics":
    //       return <Overview />;
  };

  const fetchCoinPriceInfo = React.useCallback(async () => {
    await getCoinPrice(
      selectedCoin.id,
      vs_currencies,
      include_24hr_change,
      precision
    )
      .then((resp) => {
        setLoading(true);
        setCoinPriceInfo(resp);
        console.log("Price Info:", resp);
      })
      .catch((error) => {
        console.log("Error fetching Price");
      })
      .finally(() => {
        setLoading(false);
      });
  }, [vs_currencies, include_24hr_change]);

  React.useEffect(() => {
    fetchCoinPriceInfo();
  }, [setCoinPriceInfo]);
  return loading ? (
    <PageLoader className="overlay" />
  ) : (
    <div className="chart">
      <div className="header">
        {coinPriceInfo != null &&
          Object.entries(coinPriceInfo).map((coin: any, index: number) => (
            <React.Fragment key={index}>
              <div className="title">
                <div className="coin-info">
                  <img src={selectedCoin.thumb} alt="" />
                  <Text text={selectedCoin.name} className="description-bold" />
                  <Text
                    text={selectedCoin.symbol}
                    className="description-small"
                  />
                </div>
                <div className="rank">
                  <Text
                    text={`Rank #${selectedCoin.market_cap_rank}`}
                    className="description-mid bold white"
                  />
                </div>
              </div>
              <div className="price">
                <div className="price-bold">
                  <Text
                    text={`${formatCurrency(coin[1]?.usd, "USD")}`}
                    className="sub-heading "
                  />
                  <PercentageElement
                    roundedPercentage={coin[1].usd_24h_change.toFixed(2)}
                  />
                  <Text text="(24H)" className="light-text" />
                </div>
                <Text
                  text={`${formatCurrency(coin[1].inr, "INR")}`}
                  className="description-mid"
                />
              </div>
            </React.Fragment>
          ))}
      </div>
      <div className="graph-element">
        <div className="graph-header">
          <Text
            text={`${selectedCoin.name} Price Chart (USD)`}
            className="description bold"
          />
          <div className="timelines">
            {timelines.map((timeline, index) => (
              <div
                className="timeline"
                onClick={() => handleTimelineClick(timeline)}
                key={index}
              >
                <Text
                  text={timeline}
                  className={`description-small light-text ${
                    activeTimeline === timeline && "active-timeline"
                  }`}
                />
              </div>
            ))}
          </div>
        </div>
        <div className="graph-content">
          <TradingViewWidget
            timeline={activeTimeline}
            coinSymbol={selectedCoin.symbol}
          />
        </div>
      </div>
    </div>
  );
};
