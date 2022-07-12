import React from 'react';
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
      product: productId }, () => { console.log(id); });
    console.log(productId);
  }

  addToCart = (event) => {
    let cart = JSON.parse(localStorage.getItem('productId'));
    console.log(cart);
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
