import React from "react";
import history from "../../utils/history";

import FaqContainer from "../../containers/FaqContainer";

const FaqPage = () => {
  const {
    location: { pathname },
  } = history;

  return <FaqContainer path={pathname} />;
};

export default FaqPage;
