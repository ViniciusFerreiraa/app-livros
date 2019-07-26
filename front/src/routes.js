import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import { isAuthenticated } from "./Services/auth";

import Main from './Pages/Main';
import Book from './Pages/Book';
import Login from './Pages/Login';

const loggedIn = false;

const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route
        {...rest}
            render={props =>
            isAuthenticated() ? (
                <Component {...props} />
            ) : (
                <Redirect to={{ pathname: "/", state: { from: props.location } }} />
            )
        }
    />
);

const Routes = () => (
    <BrowserRouter>
        <Switch>
            {/* <Route exact path="/" component={Main} />
            <Route path="/login/" component={Login} />
            <Route path="/book/:id" component={Book} /> */}
            
            <Route exact path="/" component={Login} />
            <Route path="/signup" component={Login} />
            <PrivateRoute path="/app" component={() => <h1>App</h1>} />
            <Route path="*" component={() => <h1>Page not found</h1>} />
        </Switch>
    </BrowserRouter>
);

export default Routes;