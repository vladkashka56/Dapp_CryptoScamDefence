import React from "react";
import history from "../../utils/history";

import DashboardContainer from "../../containers/DashboardContainer";

const DashboardPage = () => {
  const {
    location: { pathname },
  } = history;

  return <DashboardContainer path={pathname} />;
};

export default DashboardPage;
