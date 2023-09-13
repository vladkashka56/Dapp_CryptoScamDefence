import React from "react";
import history from "../../utils/history";

import NewsReadyContainer from "../../containers/NewsReadyContainer"

const NewsReadyPage = () => {
  const {
    location: { pathname },
  } = history;

  return <NewsReadyContainer path={pathname} />;
};

export default NewsReadyPage;
