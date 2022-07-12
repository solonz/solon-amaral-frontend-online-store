import React from 'react';
import { Route, BrowserRouter } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Cart from './pages/Cart';
import ProductDetails from './pages/ProductDetails';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      cartList: [],
      evaluator: [],
    };
  }

  addToCart = (product) => {
    const { cartList } = this.state;
    const exists = cartList.some((item) => item.id === product.id);

    if (exists) {
      product.quantity += 1;
    } else {
      product.quantity = 1;
      this.setState((prevState) => ({
        cartList: [...prevState.cartList, product],
      }));
    }
  }

  handleQuantity = (event, id) => {
    const { cartList } = this.state;
    console.log(id);
    console.log(event.target.id);
    if (event.target.id === 'increase') {
      cartList.find((element) => element.id === id).quantity += 1;
    } else if (cartList.find((element) => element.id === id).quantity > 1) {
      cartList.find((element) => element.id === id).quantity -= 1;
    }
    this.setState({ cartList });
  }

  render() {
    const { cartList } = this.state;

    return (
      <BrowserRouter>
        <Route path="/" exact render={ () => <Home addToCart={ this.addToCart } /> } />
        <Route
          path="/cart"
          render={ () => (<Cart
            cartList={ cartList }
            handleQuantity={ this.handleQuantity }
          />) }
        />
        <Route
          path="/productDetails/:id"
          render={ (routeProps) => (
            <ProductDetails
              addToCart={ this.addToCart }
              cartList={ cartList }
              { ...routeProps }
            />) }
        />
      </BrowserRouter>
    );
  }
}

export default App;
