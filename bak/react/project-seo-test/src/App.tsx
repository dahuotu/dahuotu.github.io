import React, { Suspense } from "react";
import { HashRouter, Route, Routes } from "react-router-dom";

import router from "./routers";

function App() {
  return (
    <HashRouter>
      <Routes>
        {router.map((item: any, i: number) => {
          return (
            <Route
              key={i}
              path={item.path}
              element={
                <Suspense fallback={<div>...</div>}>
                  <item.component />
                </Suspense>
              }
            />
          );
        })}
      </Routes>
    </HashRouter>
  );
}

export default App;
