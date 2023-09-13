import React from "react";
import CryptoNewsComponent from "../../components/CryptoNewsComponent";

const NewsContainer = (props) => {
  return (
    <>
      <CryptoNewsComponent {...props} />
    </>
  );
};

export default NewsContainer;
