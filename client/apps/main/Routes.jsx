import React from "react";
import { Switch, Route } from "react-router-dom";
import HomePage from "./pages/HomePage.jsx";

const Routes = () => (
    <Switch>
        <Route exact path="/">
            <HomePage />
        </Route>
    </Switch>
);

export default Routes;
