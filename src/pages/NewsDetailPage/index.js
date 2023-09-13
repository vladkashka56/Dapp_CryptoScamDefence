import React from "react";
import history from "../../utils/history";

import NewsDetailContainer from "../../containers/NewsDetailContainer";

function NewsDetailPage() {
  const {
    location: { pathname },
  } = history;

  return <NewsDetailContainer path={pathname} />;
}

export default NewsDetailPage;
