import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import { isAuthenticated } from "./Services/auth";

import Login from './Pages/Login';
import Signup from './Pages/Signup';
import Books from './Pages/Main';
import Book from './Pages/Book';
import Admin from './Pages/Admin';
import Edit from './Pages/Edit';

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
            {/* <Route exact path="/" component={Books} />
            <Route path="/login/" component={Login} />
            <Route path="/book/:id" component={Book} /> */}
            
            <Route exact path="/" component={Login} />
            <Route path="/signup" component={Signup} />
            <PrivateRoute path="/books" component={Books} />
            <PrivateRoute path="/admin" component={Admin} />
            <PrivateRoute path="/edit/:id" component={Edit} />
            <PrivateRoute path="/book/:id" component={Book} /> */}
            <Route path="*" component={() => <h1>Page not found</h1>} />
        </Switch>
    </BrowserRouter>
);

export default Routes;