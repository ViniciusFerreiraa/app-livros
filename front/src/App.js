import React, { Component } from 'react';
import Routes from './routes';

import Header from './Components/Header';

import "./Styles/app.css";

const App = () => (
  <div className="App">
    <Header />
    <Routes />
  </div>
)

export default App;