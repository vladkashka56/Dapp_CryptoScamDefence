import React from "react";
import CryptoNewsDetailComponent from "../../components/CryptoNewsDetailComponent";

const NewsContainer = (props) => {
  return (
    <>
      <CryptoNewsDetailComponent {...props} />
    </>
  );
};

export default NewsContainer;
