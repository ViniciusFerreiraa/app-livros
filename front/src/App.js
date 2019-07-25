import React, { Component } from 'react';
import Routes from './routes';
import "./index.css";

import Header from './Components/Header';
import Main from './Pages/Main';
import Login from './Pages/Login';
// import Login from './components/login'
// import Register from './components/registe'

const App = () => (
  <div className="App">
    <Header />
    <Routes />
  </div>
)

export default App;