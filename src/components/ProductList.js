import React from 'react';
import PropTypes from 'prop-types';

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
              <div data-testid="product" key={ product.id }>
                <h3>{ product.title }</h3>
                <img src={ product.thumbnail } alt={ product.title } />
                <p>{ product.price }</p>
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
