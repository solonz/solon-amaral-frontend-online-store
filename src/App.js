import React from 'react';
import { Route, BrowserRouter } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Cart from './pages/Cart';

function App() {
  return (
    <BrowserRouter>
      <Route path="/" exact component={ Home } />
      <Route path="/cart" component={ Cart } />
    </BrowserRouter>
  );
}

export default App;
