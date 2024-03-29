import React from "react";
import { ResponsiveAppBar } from "../../components/PageHeader/Navbar";
import { PageLayout } from "../../components/PageLayout";
import "./home.scss";
import { PageFooter } from "../../components/PageFooter/PageFooter";
import { Creds } from "../../components/Creds/Creds";

export const Home: React.FC = () => {
  return (
    <div className="home-page">
      <div className="header">
        <ResponsiveAppBar />
      </div>
      <div className="main">
        <PageLayout />
      </div>
      <div className="footer">
        <PageFooter />
      </div>
      <div className="creds">
        <Creds />
      </div>
    </div>
  );
};
