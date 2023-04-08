import React from "react";
import { Helmet } from "react-helmet-async";

const PageTitle = ({ title }) => {
  return (
    <Helmet>
      <title>Josh Tran Portfolio</title>
    </Helmet>
  );
};

export default PageTitle;
