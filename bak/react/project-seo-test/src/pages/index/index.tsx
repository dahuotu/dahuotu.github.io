import React from "react";
import { Helmet } from "react-helmet";

import Pages1 from "../pages1";
import Pages2 from "../pages2";

function Pages() {
  return (
    <div>
      <div className="App">
        <Helmet>
          <html lang="en" />
          <title>React Index</title>
          <meta name="keywords" content="React Index" />
          <meta name="description" content="React Index Test" />
          <meta name="theme-color" content="#E6E6FA" />
        </Helmet>

        <header className="App-header">Index Page</header>
        <div>
          <Pages1></Pages1>
          <Pages2></Pages2>
        </div>
      </div>
    </div>
  );
}

export default Pages;
