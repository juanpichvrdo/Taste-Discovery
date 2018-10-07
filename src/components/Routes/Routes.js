import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import App from "../../App";
import RecommendationDetails from "../Recommendations/RecommendationDetails";
import Header from "../Header/Header";

const Routes = () => (
  <BrowserRouter>
    <React.Fragment>
      <Header />
      <Switch>
        <Route exact path="/" component={App} />
        <Route path="/recommendation/:Name" component={RecommendationDetails} />
      </Switch>
      <p
        style={{
          textAlign: "center",
          margin: "0rem 0 1.5rem",
          fontSize: "1.6rem",
          fontWeight: "700"
        }}
      >
        Coded by Juan D.
      </p>
    </React.Fragment>
  </BrowserRouter>
);

export default Routes;
