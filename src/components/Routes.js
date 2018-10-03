import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import App from "../App";
import RecommendationDetails from "./Recommendations/RecommendationDetails";

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={App} />
      <Route path="/recommendation/:Name" component={RecommendationDetails} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
