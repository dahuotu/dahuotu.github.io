import React from "react";
import { Helmet } from "react-helmet";

function Pages1() {
  return (
    <div>
      <div className="App">
        <Helmet>
          <html lang="en" />
          <title>React Pages1</title>
          <meta name="keywords" content="React Pages1" />
          <meta name="description" content="React Pages1 Test" />
          <meta name="theme-color" content="#E6E6FA" />
        </Helmet>

        <header className="App-header">Pages1 Page</header>
      </div>
    </div>
  );
}

export default Pages1;
