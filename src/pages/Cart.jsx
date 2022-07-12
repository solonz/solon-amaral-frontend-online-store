import React from 'react';
import { getProductsFromId } from '../services/api';

class Cart extends React.Component {
  constructor() {
    super();
    this.state = {
      productsArr: [],
      productsQuantity: {},
    };
  }

  async componentDidMount() {
    const productsId = JSON.parse(localStorage.getItem('productId'));
    const productsArr = await this.createProductsObject(productsId);
    const productsQuantity = this.getProductsQuantity(productsId);
    this.setState({
      productsArr,
      productsQuantity,
    });
  }

  createProductsObject = async (productsId) => {
    const uniqueId = [...new Set(productsId)];
    const products = [];
    await Promise.all(uniqueId.map(async (id) => {
      const productObj = await getProductsFromId(id);
      products.push(productObj);
    }));
    return products;
  }

  getProductsQuantity = (productsId) => {
    const productsQuantity = {};
    productsId.forEach((x) => { productsQuantity[x] = (productsQuantity[x] || 0) + 1; });
    return productsQuantity;
  }

  render() {
    const { productsArr, productsQuantity } = this.state;
    return (
      <div>
        { productsArr.length === 0
          ? <p>Seu carrinho está vazio</p>
          : (
            productsArr.map((product) => (
              <div key={ product.id }>
                <p data-testid="shopping-cart-product-name">
                  {product.title}
                </p>
                <p data-testid="shopping-cart-product-quantity">
                  { productsQuantity[product.id] }
                </p>
              </div>
            ))
          )}
      </div>
    );
  }
}

export default Cart;
