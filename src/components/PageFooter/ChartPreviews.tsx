import { CoinItemModel } from "../../types/trending/trending.model";
import { Text } from "../UI/Text";

interface Props {
  coin: CoinItemModel;
}

export const ChartPreviews: React.FC<Props> = ({ coin }) => {
  const priceChangePercentage =
    coin.item.data?.price_change_percentage_24h?.usd;
  const roundedPercentage =
    priceChangePercentage != null
      ? Number(priceChangePercentage.toFixed(2))
      : null;
  console.log("Rounded:", roundedPercentage);
  return (
    <div className="preview-window">
      <div className="chart">
        <div className="coin-info">
          <img src={coin.item.small} alt="" className="coin-logo" />

          <Text text={`${coin.item.symbol}`} />
        </div>
        <img src={coin.item.data?.sparkline} alt="" />
      </div>
    </div>
  );
};
