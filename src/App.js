import React from 'react';
import { Route, BrowserRouter } from 'react-router-dom';
import './App.css';
import Home from './pages/home';

function App() {
  return <BrowserRouter><Route path="/" exact component={ Home } /></BrowserRouter>;
}

export default App;
