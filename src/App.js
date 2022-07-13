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
      evaluator: {},
    };
  }

  componentDidMount() {
    const valorLocal = JSON.parse(localStorage.getItem('comments'));
    if (valorLocal !== null) {
      this.setState({ evaluator: valorLocal });
    }
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

  addToEvaluator = (email, rate, description, id) => {
    const { evaluator } = this.state;
    const commentObj = {
      email,
      rate,
      description,
    };
    if (!evaluator[id]) { evaluator[id] = []; }
    evaluator[id].push(commentObj);

    this.setState((prevState) => ({
      evaluator: {
        ...prevState.evaluator,
        evaluator,
      },
    }));
    localStorage.setItem('comments', JSON.stringify(evaluator));
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
    const { cartList, evaluator } = this.state;

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
              evaluator={ evaluator }
              addToEvaluator={ this.addToEvaluator }
              { ...routeProps }
            />) }
        />
      </BrowserRouter>
    );
  }
}

export default App;
