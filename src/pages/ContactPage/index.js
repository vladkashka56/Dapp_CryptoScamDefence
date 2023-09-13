import React from "react";
import history from "../../utils/history";

import ContactContainer from "../../containers/ContactContainer";

const ContactPage = () => {
  const {
    location: { pathname },
  } = history;

  return <ContactContainer path={pathname} />;
};

export default ContactPage;
