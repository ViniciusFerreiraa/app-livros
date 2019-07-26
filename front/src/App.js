import React from 'react';
import Routes from './routes';
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";

import Header from './Components/Header';

import "./Styles/app.css";

const App = () => (
  <div className="App">
    <BrowserRouter>
      <Switch>
        <Route path="*" component={Header} />
      </Switch>
    </BrowserRouter>
    
    <Routes />
  </div>
)

export default App;