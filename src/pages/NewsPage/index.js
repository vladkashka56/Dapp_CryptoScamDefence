import React from "react";
import history from "../../utils/history";

import NewsContainer from "../../containers/NewsContainer";

function NewsPage() {
  const {
    location: { pathname },
  } = history;

  return <NewsContainer path={pathname} />;
}

export default NewsPage;
