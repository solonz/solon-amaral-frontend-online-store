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
    if (!productsId) return {};
    const productsQuantity = {};
    productsId.forEach((x) => { productsQuantity[x] = (productsQuantity[x] || 0) + 1; });
    return productsQuantity;
  }

  handleChangeQuantity = (event, productId) => {
    const { productsQuantity } = this.state;
    // const idProduct = productID;
    const idButton = event.target.id;
    if (idButton === 'increase') {
      const newQuantity = productsQuantity[productId] + 1;
      this.setState((prevState) => ({
        productsQuantity: {
          ...prevState.productsQuantity, [productId]: newQuantity,
        },
      }));
    } else if (productsQuantity[productId] > 1) {
      const newQuantity = productsQuantity[productId] - 1;
      this.setState((prevStat) => ({
        productsQuantity: {
          ...prevStat.productsQuantity, [productId]: newQuantity,
        },
      }));
    }
  }

  render() {
    const { productsArr, productsQuantity } = this.state;
    return (
      <div>
        { productsArr.length === 0
          ? <p data-testid="shopping-cart-empty-message">Seu carrinho está vazio</p>
          : (
            productsArr.map((product) => (
              <div key={ product.id }>
                <img src={ product.thumbnail } alt={ product.name } />
                <p data-testid="shopping-cart-product-name">
                  {product.title}
                </p>
                <button
                  id="decrease"
                  type="button"
                  data-testid="product-decrease-quantity"
                  onClick={ (event) => this.handleChangeQuantity(event, product.id) }
                >
                  -
                </button>
                <p data-testid="shopping-cart-product-quantity">
                  { productsQuantity[product.id] }
                </p>
                <button
                  id="increase"
                  type="button"
                  data-testid="product-increase-quantity"
                  onClick={ (event) => this.handleChangeQuantity(event, product.id) }
                >
                  +
                </button>
              </div>
            ))
          )}
      </div>
    );
  }
}

export default Cart;
