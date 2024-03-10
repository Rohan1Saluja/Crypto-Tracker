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

interface Props {
  setSelectedCoin: (value: CoinInfoModel) => void;
}

export const SearchMarket: React.FC<Props> = ({ setSelectedCoin }) => {
  const [searchedCoinsList, setSearchedCoinsList] =
    React.useState<SearchedMarketModel>(getDefaultMarketList());

  const fetchSearchedCoinDetails = React.useCallback(
    async (searchedTerm: string) => {
      await getSearchedCoinTerm(searchedTerm)
        .then((resp) => {
          console.log("Searched Coins List:", resp);
          setSearchedCoinsList(resp);
        })
        .catch((error) => {
          console.log("Search API error");
        });
    },
    []
  );

  const handleInputChange = (event: any) => {
    if (event.target.value.length > 2)
      fetchSearchedCoinDetails(event.target.value);
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
    </div>
  );
};
