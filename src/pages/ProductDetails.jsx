import React from 'react';
import { Link } from 'react-router-dom';
import Proptypes, { shape } from 'prop-types';
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

  render() {
    const { product } = this.state;
    const { addToCart } = this.props;
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
          {product.title}
        </h2>
        <img src={ product.thumbnail } alt={ product.title } />
        <h3>{product.price}</h3>
        <h4>{product.warranty}</h4>
        <button
          data-testid="product-detail-add-to-cart"
          type="button"
          id={ product.id }
          onClick={ () => addToCart(product) }
        >
          Adicionar ao Carrinho
        </button>
      </div>
    );
  }
}

ProductDetails.propTypes = {
  match: shape({}),
  addToCart: Proptypes.func,
}.isRequired;

export default ProductDetails;
