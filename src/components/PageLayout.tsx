import React from "react";
import { CryptoChart } from "./PageSections/CryptoChart/CryptoChart";
import "./PageLayout.scss";
import { Text } from "./UI/Text";
import { Button } from "@mui/material";
import {
  ArrowRightAlt,
  DoubleArrow,
  KeyboardDoubleArrowRight,
} from "@mui/icons-material";
import { Overview } from "./PageSections/Overview/Overview";
import { useNavigate } from "react-router-dom";
import { TrendingCoins } from "./PageSections/TrendingCoins";
import { Teams } from "./PageSections/Teams/Teams";
import { getSearchedCoinTerm } from "../utils/api";
import { TextInput } from "./UI/TextInput";

export const PageLayout: React.FC = () => {
  const navigate = useNavigate();
  const [activeStep, setActiveStep] = React.useState("Overview");
  const [searchedTerm, setSearchedTerm] = React.useState("bitcoin");
  const [searchedCoinsList, setSearchedCoinsList] = React.useState([]);
  const [selectedCoin, setSelectedCoin] = React.useState({});
  const stepperKeys = [
    "Overview",
    "Fundamentals",
    "News Insights",
    "Sentiments",
    "Team",
    "Technicals",
    "Tokenomics",
  ];

  const fetchSearchedCoinDetails = React.useCallback(
    async (searchedTerm: string) => {
      await getSearchedCoinTerm(searchedTerm)
        .then((resp) => {
          console.log("Searched Coins List:", resp);
        })
        .catch((error) => {
          console.log("Search API error");
        });
    },
    []
  );

  const handleStepClick = (step: string) => {
    setActiveStep(step);
    switch (step) {
      case "Overview":
        return <Overview />;
      case "Fundamentals":
        return <Overview />;
      case "News Insights":
        return <Overview />;
      case "Sentiments":
        return <Overview />;
      case "Team":
        return <Overview />;
      case "Technicals":
        return <Overview />;
      case "Tokenomics":
        return <Overview />;
    }
  };
  return (
    <div className="layout-screen">
      <div className="left">
        <div className="current-channel" onClick={() => setSearchedTerm("")}>
          <div className="info-tree">
            <Text text="Cryptocurrencies" className="description-small" />
          </div>
          {searchedTerm.length > 0 && (
            <>
              {<KeyboardDoubleArrowRight fontSize="small" />}
              <div className="info-tree">
                <Text text={searchedTerm} className="description-small bold" />
              </div>
            </>
          )}
        </div>
        {/* There must be a markets list -><div></div> */}
        {!searchedTerm && (
          <div className="box-item">
            <div className="input-box">
              <TextInput />
            </div>
            <div className="searched-list">{}</div>
          </div>
        )}
        {searchedTerm.length > 0 && (
          <div className="box-item">
            <CryptoChart
              coinNames={searchedTerm}
              precision="2"
              vs_currencies="usd,inr"
              include_24hr_change
            />
          </div>
        )}
        <div className="stepper">
          {stepperKeys.map((step, index) => (
            <Button
              onClick={() => handleStepClick(step)}
              className={`button ${activeStep === step && "active-button"}`}
              key={index}
            >
              {step}
            </Button>
          ))}
        </div>
        <div className="box-item">
          <Overview />
        </div>
        <div className="box-item"></div>
        <div className="box-item">
          <Teams />
        </div>
      </div>
      <div className="right">
        <div className="get-started">
          <Text
            text="Get Started with KoinX for FREE"
            className="sub-heading white"
          />
          <Text
            text="With our range of features that you can equip for free, 
            KoinX allows you to be more educated and aware of your tax reports."
            className="description-small shorter-line-height white"
          />
          <div className="vector"></div>
          <Button
            variant="contained"
            endIcon={<ArrowRightAlt />}
            className="button"
          >
            Get Started for FREE
          </Button>
        </div>
        <div className="trending-coins-section">
          <TrendingCoins />
        </div>
      </div>
    </div>
  );
};
