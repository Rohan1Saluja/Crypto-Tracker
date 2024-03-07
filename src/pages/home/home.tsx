import React from "react";
import { ResponsiveAppBar } from "../../components/PageHeader/Navbar";
import { PageLayout } from "../../components/PageLayout";
import "./home.scss";

export const Home: React.FC = () => {
  return (
    <div className="home-page">
      <div className="header">
        <ResponsiveAppBar />
      </div>
      <div className="main">
        <PageLayout />
      </div>
    </div>
  );
};
