import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class ProductList extends React.Component {
  render() {
    const {
      productList,
    } = this.props;

    const { addToCart } = this.props;

    return (
      <div>
        { productList.length === 0
          ? <p>Nenhum produto foi encontrado</p>
          : (
            productList.map((product) => (
              <div key={ product.id }>
                <Link
                  data-testid="product-detail-link"
                  to={ `/productDetails/${product.id}` }
                >
                  <div data-testid="product">
                    <h3>{ product.title }</h3>
                    <img src={ product.thumbnail } alt={ product.title } />
                    <p>{ product.price }</p>
                  </div>
                  <div />
                </Link>
                <button
                  data-testid="product-add-to-cart"
                  id={ product.id }
                  type="button"
                  onClick={ () => addToCart(product) }
                >
                  Comprar
                </button>
              </div>
            ))
          )}
      </div>
    );
  }
}

ProductList.propTypes = {
  addToCart: PropTypes.func,
}.isRequired;

export default ProductList;
