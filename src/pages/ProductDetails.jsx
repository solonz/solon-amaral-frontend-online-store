import React from 'react';
import { Link } from 'react-router-dom';
import { shape } from 'prop-types';
import { getProductsFromId } from '../services/api';

class ProductDetails extends React.Component {
  constructor() {
    super();

    this.state = {
      product: {},
    };
  }

  componentDidMount() {
    const { match: { params: { id } } } = this.props;
    this.getProductDetail(id);
  }

  getProductDetail = async (id) => {
    const productId = await getProductsFromId(id);
    this.setState({
      product: productId });
  }

  addToCart = (event) => {
    let cart = JSON.parse(localStorage.getItem('productId'));
    if (!cart) {
      cart = [];
    }
    cart.push(event.target.id);
    localStorage.setItem('productId', JSON.stringify(cart));
  }

  render() {
    const { product } = this.state;
    return (
      <div>
        <Link
          data-testid="shopping-cart-button"
          to="/cart"
        >
          Carrinho
        </Link>
        <p> Detalhes do Produto </p>
        <h2 data-testid="product-detail-name">
          {' '}
          {product.title}
          {' '}
        </h2>
        <img src={ product.thumbnail } alt={ product.title } />
        <h3>{product.price}</h3>
        <h4>{product.warranty}</h4>
        <button
          data-testid="product-detail-add-to-cart"
          type="button"
          id={ product.id }
          onClick={ this.addToCart }
        >
          Adicionar ao Carrinho
        </button>
      </div>
    );
  }
}

ProductDetails.propTypes = {
  match: shape({}).isRequired,
};

export default ProductDetails;
