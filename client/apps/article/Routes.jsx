import React from "react";
import { Switch, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage.jsx";

const Routes = () => (
    <Switch>
        <Route exact path="/articles">
            <LandingPage />
        </Route>
    </Switch>
);

export default Routes;
