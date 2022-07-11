import React from 'react';
import { Route, BrowserRouter } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Cart from './pages/Cart';
import ProductDetails from './pages/ProductDetails';

function App() {
  return (
    <BrowserRouter>
      <Route path="/" exact component={ Home } />
      <Route path="/cart" component={ Cart } />
      <Route path="/productDetails/:id" component={ ProductDetails } />
    </BrowserRouter>
  );
}

export default App;
