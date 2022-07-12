import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class ProductList extends React.Component {
  addToCart = (event) => {
    let cart = JSON.parse(localStorage.getItem('productId'));
    if (!cart) {
      cart = [];
    }
    cart.push(event.target.id);
    localStorage.setItem('productId', JSON.stringify(cart));
  }

  render() {
    const {
      productList,
    } = this.props;
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
                  onClick={ this.addToCart }
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
  productList: PropTypes.array,
}.isRequired;

export default ProductList;
