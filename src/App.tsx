import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@mui/material";
import { theme } from "./components/utils/theme";
import { Home } from "./pages/home/home";
import React from "react";
import { getPingStatus } from "./utils/api";
import { PageLoader } from "./components/UI/PageLoader";
import { Error } from "./pages/error";

const App = () => {
  const [pingResponse, setPingResponse] = React.useState(false);
  const [retryCount, setRetryCount] = React.useState(0);
  const maxRetries = 2; // Set your desired maximum retry count
  const retryDelay = 3000; // Set the delay between retries in milliseconds
  const fetchPingStatus = React.useCallback(async () => {
    await getPingStatus()
      .then((resp) => {
        if (!!resp) setPingResponse(true);
      })
      .catch((error) => {
        console.log("Ping Error");
        setPingResponse(false);
        // Retry logic
      })
      .finally(() => {
        setRetryCount((prevRetryCount) => prevRetryCount + 1);
      });
  }, []);
  React.useEffect(() => {
    if (retryCount < maxRetries && !pingResponse) {
      setTimeout(() => {
        fetchPingStatus();
      }, retryDelay);
      console.log(`Retrying... Attempt ${retryCount + 1}`);
    }
  }, [fetchPingStatus, retryCount, pingResponse]);

  return pingResponse ? (
    <ThemeProvider theme={theme}>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </Router>
    </ThemeProvider>
  ) : retryCount < maxRetries ? (
    <PageLoader className="overlay" />
  ) : (
    <Error />
  );
};

export default App;
