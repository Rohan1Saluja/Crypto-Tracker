import React from "react";

interface Props {
  timeline: string;
  coinSymbol: string;
}
export const TradingViewWidget: React.FC<Props> = ({
  timeline,
  coinSymbol,
}) => {
  const container = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    if (container.current) {
      container.current.innerHTML = "";
      const script = document.createElement("script");
      script.src =
        "https://s3.tradingview.com/external-embedding/embed-widget-advanced-chart.js";
      script.type = "text/javascript";
      script.async = true;
      script.innerHTML = `
        {
          "autosize": false,
          "symbol": "${coinSymbol + "USD"}",
          "timezone": "Etc/UTC",
          "theme": "light",
          "style": "2",
          "locale": "en",
          "enable_publishing": false,
          "backgroundColor": "rgba(255, 255, 255, 1)",
          "hide_top_toolbar": true,
          "hide_legend": true,
          "range": "${timeline}",
          "allow_symbol_change": false,
          "details": false,
          "calendar": false,
          "show_popup_button": false,
          "popup_width": "1000",
          "popup_height": "650",
          "support_host": "https://www.tradingview.com"
        }`;
      container.current.appendChild(script);
    }
  }, [timeline]);

  return (
    <div
      className="tradingview-widget-container"
      ref={container}
      style={{ height: "100%", width: "100%", border: "none" }}
    >
      <div
        className="tradingview-widget-container__widget"
        style={{ height: "calc(100% - 32px)", width: "100%", border: "none" }}
      ></div>
      <div className="tradingview-widget-copyright">
        <a
          href="https://www.tradingview.com/"
          rel="noopener nofollow"
          target="_blank"
        >
          <span className="blue-text">Track all markets on TradingView</span>
        </a>
      </div>
    </div>
  );
};
