import React from "react";
import history from "../../utils/history";

import TokenLockContainer from "../../containers/TokenLockContainer";

const TokenLockPage = () => {
  const {
    location: { pathname },
  } = history;

  return <TokenLockContainer path={pathname} />;
};

export default TokenLockPage;
