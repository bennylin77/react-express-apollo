import { hot } from "react-hot-loader/root";
import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import MainRoutes from "./apps/main/Routes.jsx";
import ArticleRoutes from "./apps/article/Routes.jsx";

const App = () => (
    <BrowserRouter>
        <Switch>
            <Route path="/articles">
                <ArticleRoutes />
            </Route>
            <Route path="/">
                <MainRoutes />
            </Route>
        </Switch>
    </BrowserRouter>
);

export default hot(App);
