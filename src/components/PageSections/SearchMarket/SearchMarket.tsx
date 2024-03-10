import { Button } from "@mui/material";
import { TextInput } from "../../UI/TextInput";
import { SearchOutlined } from "@mui/icons-material";
import { getSearchedCoinTerm } from "../../../utils/api";
import React from "react";
import "./SearchMarket.scss";
import {
  CoinInfoModel,
  SearchedMarketModel,
} from "../../../types/coins/coins.model";
import { Text } from "../../UI/Text";
import { getDefaultMarketList } from "./constants";
import { PageLoader } from "../../UI/PageLoader";

interface Props {
  setSelectedCoin: (value: CoinInfoModel) => void;
}

export const SearchMarket: React.FC<Props> = ({ setSelectedCoin }) => {
  const [searchedCoinsList, setSearchedCoinsList] =
    React.useState<SearchedMarketModel>(getDefaultMarketList());
  const [loading, setLoading] = React.useState(false);

  const fetchSearchedCoinDetails = React.useCallback(
    async (searchedTerm: string) => {
      await getSearchedCoinTerm(searchedTerm)
        .then((resp) => {
          setLoading(true);
          console.log("Searched Coins List:", resp);
          setSearchedCoinsList(resp);
        })
        .catch((error) => {
          console.log("Search API error");
        })
        .finally(() => {
          setLoading(false);
        });
    },
    []
  );

  const handleInputChange = (event: any) => {
    if (event.target.value.length > 1)
      fetchSearchedCoinDetails(event.target.value);
    if (event.target.value.length === 0)
      setSearchedCoinsList(getDefaultMarketList());
  };

  return (
    <div className="search-market">
      <div className="input-box">
        <TextInput
          handleChange={(event: any) => handleInputChange(event)}
          width="large"
          placeholder="Search markets here"
        />
        <Button>
          <SearchOutlined />
        </Button>
      </div>
      <div className="searched-list">
        {searchedCoinsList &&
          searchedCoinsList?.coins.map((coin, index) => (
            <div
              className="row"
              key={index}
              onClick={() => setSelectedCoin(coin)}
            >
              <div className="coin-info">
                <img src={coin.thumb} alt="" />
                <Text text={coin.name} className="description" />
                <Text text={coin.symbol} className="description-small" />
              </div>
              <div className="rank">
                <Text
                  text={`Rank #${coin.market_cap_rank}`}
                  className="description-mid bold white"
                />
              </div>
            </div>
          ))}
      </div>
      {loading && <PageLoader className="overlay" />}
    </div>
  );
};
