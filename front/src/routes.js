import React from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Main from './Pages/Main';
import Book from './Pages/Book';
import Login from './Pages/Login';

// https://medium.com/@anneeb/redirecting-in-react-4de5e517354a

const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route path="/login/" component={Login} />
            <Route exact path="/" component={Main} />
            <Route path="/book/:id" component={Book} />
        </Switch>
    </BrowserRouter>
);

export default Routes;