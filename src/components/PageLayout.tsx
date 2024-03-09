import React from "react";
import { CryptoChart } from "./PageSections/CryptoChart/CryptoChart";
import "./PageLayout.scss";
import { Text } from "./UI/Text";
import { Button } from "@mui/material";
import { ArrowRightAlt } from "@mui/icons-material";
import { Overview } from "./PageSections/Overview/Overview";
import { useNavigate } from "react-router-dom";
import { TrendingCoins } from "./PageSections/TrendingCoins";
import { Teams } from "./PageSections/Teams/Teams";

export const PageLayout: React.FC = () => {
  const navigate = useNavigate();
  const [activeStep, setActiveStep] = React.useState("Overview");
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
        <div className="current-channel">Cryptocurrencies</div>
        {/* There must be a markets list -><div></div> */}
        <div className="box-item">
          <CryptoChart
            coinNames="bitcoin"
            vs_currencies="inr,usd"
            include_24hr_change
            precision="2"
          />
        </div>
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
            className="description-extra-small shorter-line-height white"
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
