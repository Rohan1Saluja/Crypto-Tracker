import { Button } from "@mui/material";
import { Text } from "../../UI/Text";
import "./CryptoChart.scss";
import React from "react";
import { getCoinPrice } from "../../../utils/api";
import { PageLoader } from "../../UI/PageLoader";
import { TradingViewWidget } from "../../UI/TradingViewWidget";
import { formatCurrency } from "./utils";
import { PercentageElement } from "../../UI/PercentageElement";

interface Props {
  coinNames: string;
  vs_currencies: string;
  include_24hr_change: boolean;
  precision: string;
}

export const CryptoChart: React.FC<Props> = ({
  coinNames,
  vs_currencies,
  include_24hr_change,
  precision,
}) => {
  const [activeTimeline, setActiveTimeline] = React.useState("1H");
  const coinsList = coinNames.split(",");
  const [coinPriceInfo, setCoinPriceInfo] = React.useState<any[]>();
  const timelines = ["1H", "1D", "1W", "1M", "3M", "6M", "12M", "ALL"];
  const [loading, setLoading] = React.useState(false);

  const toTitleCase = (str: string) => {
    return str.replace(
      /\w\S*/g,
      (txt: string) => txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase()
    );
  };

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
    await getCoinPrice(coinNames, vs_currencies, include_24hr_change, precision)
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
  }, [coinNames, vs_currencies, include_24hr_change]);

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
                  <Text
                    text={toTitleCase(coinsList[index])}
                    className="description-bold"
                  />
                </div>
                <div className="rank">
                  <Button className="button">Rank</Button>
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
                  className="description-small"
                />
              </div>
            </React.Fragment>
          ))}
      </div>
      <div className="graph-element">
        <div className="graph-header">
          <Text text="Bitcoin Price Chart (USD)" className="description bold" />
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
          <TradingViewWidget timeline={activeTimeline} coinSymbol={"BTC"} />
        </div>
      </div>
    </div>
  );
};
