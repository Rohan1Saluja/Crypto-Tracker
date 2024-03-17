import React from "react";
import { CryptoChart } from "./PageSections/CryptoChart/CryptoChart";
import "./PageLayout.scss";
import { Text } from "./UI/Text";
import { Button } from "@mui/material";
import { ArrowRightAlt, KeyboardDoubleArrowRight } from "@mui/icons-material";
import { Overview } from "./PageSections/Overview/Overview";
import { TrendingCoins } from "./PageSections/TrendingCoins";
import { Teams } from "./PageSections/Teams/Teams";
import { SearchMarket } from "./PageSections/SearchMarket";
import { CoinInfoModel } from "../types/coins/coins.model";
import { Fundamentals } from "./PageSections/Fundamentals";

export const PageLayout: React.FC = () => {
  const [activeStep, setActiveStep] = React.useState("Overview");
  const [selectedCoin, setSelectedCoin] = React.useState<CoinInfoModel>();
  const [activeComponent, setActiveComponent] =
    React.useState<React.ReactNode>();
  const stepperKeys = [
    "Overview",
    "Fundamentals",
    "News Insights",
    "Sentiments",
    "Team",
    "Technicals",
    "Tokenomics",
  ];

  const handleStepClick = (step: string) => {
    setActiveStep(step);
    if (selectedCoin) {
      setTimeout(() => {
        switch (step) {
          case "Overview":
            setActiveComponent(<Overview coinID={selectedCoin!.id} />);
            break;
          case "Fundamentals":
            setActiveComponent(<Fundamentals />);
            break;
          case "News Insights":
            setActiveComponent(<Overview coinID={selectedCoin!.id} />);
            break;
          case "Sentiments":
            setActiveComponent(<Overview coinID={selectedCoin!.id} />);
            break;
          case "Team":
            setActiveComponent(<Teams />);
            break;
          case "Technicals":
            setActiveComponent(<Overview coinID={selectedCoin!.id} />);
            break;
          case "Tokenomics":
            setActiveComponent(<Overview coinID={selectedCoin!.id} />);
            break;
          default:
            setActiveComponent(<Overview coinID={selectedCoin!.id} />);
            break;
        }
      }, 300);
    }
  };
  React.useEffect(() => {
    if (selectedCoin && activeStep === "Overview") {
      setActiveComponent(<Overview coinID={selectedCoin!.id} />);
    }
  }, [setSelectedCoin, setActiveStep]);

  return (
    <div className="layout-screen">
      <div className="left">
        <div className="current-channel">
          <div className="info-tree" onClick={() => setSelectedCoin(undefined)}>
            <Text text="Cryptocurrencies" className="description-small" />
          </div>
          {!!selectedCoin && (
            <>
              {<KeyboardDoubleArrowRight fontSize="small" />}
              <div className="info-tree">
                <Text
                  text={selectedCoin.name}
                  className="description-small bold"
                />
              </div>
            </>
          )}
        </div>
        {/* There must be a markets list -><div></div> */}
        <div className="box-item">
          {selectedCoin == null && (
            <SearchMarket setSelectedCoin={setSelectedCoin} />
          )}
          {!!selectedCoin && (
            <div className="">
              <CryptoChart
                selectedCoin={selectedCoin}
                precision="8"
                vs_currencies="usd,inr"
                include_24hr_change
              />
            </div>
          )}
        </div>
        <div className="stepper">
          {selectedCoin &&
            stepperKeys.map((step, index) => (
              <Button
                onClick={() => handleStepClick(step)}
                className={`button ${activeStep === step && "active-button"}`}
                key={index}
              >
                {step}
              </Button>
            ))}
        </div>
        {selectedCoin && activeStep && (
          <div className="box-item">{activeComponent}</div>
        )}
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
