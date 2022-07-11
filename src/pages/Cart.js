import React from 'react';
import { getProductsFromId } from '../services/api';

class Cart extends React.Component {
  constructor() {
    super();

    this.state = {
      cartList: [],
      countItems: {},
      myCart: [],
    };
  }

  componentDidMount() {
    const list = JSON.parse(localStorage.getItem('productId'));
    console.log(list);
    this.setState({ cartList: list });
    this.countProducts(list);
    this.createCart();
  }

  countProducts = (list) => {
    const counts = {};
    list.forEach((x) => { counts[x] = (counts[x] || 0) + 1; });
    this.setState({ countItems: counts });
  }

  createCart = () => {
    const {cartList} = this.state;
    const list = [];
    cartList.forEach( async (id) => {
      list.push(await getProductsFromId(id));
    })
    this.setState({myCart: list});
    
  }

  render() {
    const { countItems, cartList, myCart } = this.state;
    return (
      <div>
        {!cartList
          ? <p data-testid="shopping-cart-empty-message"> Seu carrinho está vazio </p>
          : (
          )}
      </div>
    );
  }
}

export default Cart;
