import React from "react";
import { Helmet } from "react-helmet";

function Pages2() {
  return (
    <div>
      <div className="App">
        <Helmet>
          <html lang="en" />
          <title>React Pages2</title>
          <meta name="keywords" content="React Pages2" />
          <meta name="description" content="React Pages2 Test" />
          <meta name="theme-color" content="#E6E6FA" />
        </Helmet>

        <header className="App-header">Pages2 Page</header>
      </div>
    </div>
  );
}

export default Pages2;
