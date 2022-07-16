import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

class Cart extends React.Component {
  render() {
    const {
      cartList,
      handleQuantity,
    } = this.props;
    return (
      <div>
        { cartList.length === 0
          ? <p data-testid="shopping-cart-empty-message">Seu carrinho está vazio</p>
          : (
            cartList.map((product) => (
              <div key={ product.id }>
                <img src={ product.thumbnail } alt={ product.title } />
                <p data-testid="shopping-cart-product-name">
                  {product.title}
                </p>
                <button
                  id="decrease"
                  type="button"
                  data-testid="product-decrease-quantity"
                  onClick={ (event) => handleQuantity(event, product.id) }
                >
                  -
                </button>
                <p data-testid="shopping-cart-product-quantity">
                  { product.quantity }
                </p>
                <button
                  id="increase"
                  type="button"
                  data-testid="product-increase-quantity"
                  onClick={ (event) => handleQuantity(event, product.id) }
                >
                  +
                </button>
              </div>
            ))
          )}
        <Link to="/checkout" data-testid="checkout-products">Finalizar compra</Link>
      </div>
    );
  }
}

Cart.propTypes = {
  cartList: PropTypes.arr,
}.isRequired;

export default Cart;
