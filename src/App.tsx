import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { ChainId, DAppProvider } from "@usedapp/core";
import usePromptNetwork from "./hooks/useNetworkPrompt";
import CryptoScamDefenceFinanceProvider from "./contexts/CryptoScamDefenceFinanceProvider";
import ModalsProvider from "./contexts/Modals";
import store from "./state";
import configs from "./config";
import Updaters from "./state/Updaters";
import Popups from "./components/Popups";
import { RefreshContextProvider } from "./contexts/RefreshContext";
import CryptoPreloaderComponent from "./components/CryptoPreloaderComponent";
import CryptoHeaderComponent from "./components/CryptoHeaderComponent";
import CryptoVerticalSocialComponent from "./components/CryptoVerticalSocialComponent";
import CryptoFooterComponent from "./components/CryptoFooterComponent";
import LandingPage from "./pages/LandingPage";
import NewsPage from "./pages/NewsPage";
import NewsDetailPage from "./pages/NewsDetailPage";
import TeamPage from "./pages/TeamPage";
import FaqPage from "./pages/FaqPage";
import ContactPage from "./pages/ContactPage";
import NewsReadyPage from "./pages/NewsReadyPage";
import DashboardPage from "./pages/DashboardPage";
import TokenLockPage from "./pages/TokenLockPage";
import "antd/dist/antd.css";
import "./App.css";

const App: React.FC = () => {
  // Clear localStorage for mobile users
  if (
    typeof localStorage.version_app === "undefined" ||
    localStorage.version_app !== "1.0"
  ) {
    localStorage.clear();
    localStorage.setItem("connectorId", "");
    localStorage.setItem("version_app", "1.0");
  }

  usePromptNetwork();

  return (
    <Providers>
      <CryptoPreloaderComponent />
      <Router>
        <CryptoVerticalSocialComponent />
        <CryptoHeaderComponent />
        <div className="content-wrapper">
          <div className="content-body">
            <Switch>
              <Route exact path="/" component={LandingPage} />
              <Route exact path="/lock" component={TokenLockPage} />
              <Route exact path="/news" component={NewsPage} />
              <Route exact path="/news-detail" component={NewsDetailPage} />
              <Route exact path="/team" component={TeamPage} />
              <Route exact path="/faq" component={FaqPage} />
              <Route exact path="/contact" component={ContactPage} />
              <Route exact path="/dashboard" component={DashboardPage} />
              <Route
                exact
                path="/news-ready-to-get-on-board"
                component={NewsReadyPage}
              />
            </Switch>
          </div>
        </div>
        <CryptoFooterComponent />
      </Router>
    </Providers>
  );
};

const config = {
  supportedChains: [ChainId.Mainnet],
  readOnlyChainId: ChainId.Mainnet,
  readOnlyUrls: {
    [ChainId.Mainnet]: configs.defaultProvider,
  },
};

// const config = {
//   supportedChains: [ChainId.Ropsten],
//   readOnlyChainId: ChainId.Ropsten,
//   readOnlyUrls: {
//     [ChainId.Ropsten]: configs.defaultProvider,
//   },
// };

const Providers: React.FC = ({ children }) => {
  return (
    <DAppProvider config={config}>
      <Provider store={store}>
        <Updaters />
        <RefreshContextProvider>
          <CryptoScamDefenceFinanceProvider>
            <ModalsProvider>
              <>
                <Popups />
                {children}
              </>
            </ModalsProvider>
          </CryptoScamDefenceFinanceProvider>
        </RefreshContextProvider>
      </Provider>
    </DAppProvider>
  );
};

export default App;
