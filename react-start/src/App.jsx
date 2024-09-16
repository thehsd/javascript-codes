import React from "react";
import { BrowserRouter, Link } from "react-router-dom";
import Routes from "./Routes";

const App = () => {
  return (
    <>
      <BrowserRouter>
        {/* <Routes>
          <Route path="/route-1" element={<RouteOne />}>
            <Route path="/route-1/sub-route-1" element={<SubRouteOne />} />
          </Route>
          <Route path="/route-2" element={<RouteTwo />} />
        </Routes> */}
        <Routes />
      </BrowserRouter>
    </>
  );
};

export default App;
