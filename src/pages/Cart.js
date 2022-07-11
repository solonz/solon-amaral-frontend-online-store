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
    this.setState({ cartList: list }, () => {
      this.createCart();
    });
    this.countProducts(list);
  }

  countProducts = (list) => {
    const counts = {};
    list.forEach((x) => { counts[x] = (counts[x] || 0) + 1; });
    this.setState({ countItems: counts });
  }

  createCart = () => {
    const { cartList } = this.state;
    const uniqueCartList = [...new Set(cartList)];
    const list = [];
    uniqueCartList.forEach(async (id) => {
      list.push(await getProductsFromId(id));
    });
    this.setState({ myCart: list });
  }

  render() {
    const { countItems, cartList, myCart } = this.state;
    console.log(myCart);
    return (
      <div>
        {!cartList
          ? <p data-testid="shopping-cart-empty-message"> Seu carrinho está vazio </p>
          : (
            myCart.map((item) => (
              <div key={ item.id }>
                <p>
                  {item.title}
                </p>
              </div>
            ))
          )}
      </div>
    );
  }
}

export default Cart;
