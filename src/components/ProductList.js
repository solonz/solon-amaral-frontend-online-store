import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class ProductList extends React.Component {
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
              <Link
                data-testid="product-detail-link"
                to={ `/productDetails/${product.id}` }
                key={ product.id }
              >
                <div data-testid="product">
                  <h3>{ product.title }</h3>
                  <img src={ product.thumbnail } alt={ product.title } />
                  <p>{ product.price }</p>
                </div>
              </Link>
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
