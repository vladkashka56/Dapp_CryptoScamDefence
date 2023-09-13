import React from "react";
import history from "../../utils/history";
import TeamContainer from "../../containers/TeamContainer";

function TeamPage() {
  const {
    location: { pathname },
  } = history;

  return <TeamContainer path={pathname} />;
}

export default TeamPage;
