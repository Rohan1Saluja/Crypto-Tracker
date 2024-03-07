import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@mui/material";
import { theme } from "./components/utils/theme";
import { Home } from "./pages/home/home";
import React from "react";
import { getPingStatus } from "./utils/api";
import { PageLoader } from "./components/UI/PageLoader";

const App = () => {
  const [pingResponse, setPingResponse] = React.useState(false);
  const [retryCount, setRetryCount] = React.useState(0);
  const maxRetries = 5; // Set your desired maximum retry count
  const retryDelay = 1000; // Set the delay between retries in milliseconds
  const fetchPingStatus = React.useCallback(async () => {
    await getPingStatus()
      .then((resp) => {
        if (!!resp) setPingResponse(true);
      })
      .catch((error) => {
        console.log("Ping Error");
        setPingResponse(false);
        // Retry logic
        if (retryCount < maxRetries && !pingResponse) {
          setRetryCount(retryCount + 1);
          console.log(`Retrying... Attempt ${retryCount + 1}`);
          setTimeout(fetchPingStatus, retryDelay);
        }
      });
  }, [pingResponse]);
  React.useEffect(() => {
    fetchPingStatus();
  }, [getPingStatus]);
  return pingResponse ? (
    <ThemeProvider theme={theme}>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </Router>
    </ThemeProvider>
  ) : (
    <PageLoader className="overlay" />
  );
};

export default App;
