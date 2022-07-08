import React from 'react';
import { Link } from 'react-router-dom';
import Categories from '../components/Categories';
import ProductList from '../components/ProductList';
import { getProductsFromQuery, getProductsFromCategories } from '../services/api';

import '../styles/home.css';

class Home extends React.Component {
  constructor() {
    super();
    this.state = {
      inputSearch: '',
      productList: [],
      hasClicked: false,
    };
  }

  handleChange = ({ target }) => {
    this.setState({ inputSearch: target.value });
  }

  searchProduct = async () => {
    const { inputSearch } = this.state;
    this.setState({
      productList: await getProductsFromQuery(inputSearch),
      hasClicked: true,
    });
  }

  searchProductByCategories = async (categorieId) => {
    const products = await getProductsFromCategories(categorieId);
    this.setState({
      productList: products,
      hasClicked: true,
    });
  }

  render() {
    const {
      inputSearch,
      productList,
      hasClicked,
    } = this.state;

    return (
      <div className="homeContainer">
        <Categories searchProducts={ this.searchProductByCategories } />
        <div className="homeContentContainer">
          <div className="searchContainer">
            <label htmlFor="input-search">
              <input
                data-testid="query-input"
                name="input-search"
                type="text"
                value={ inputSearch }
                onChange={ this.handleChange }
              />
            </label>
            <button
              type="button"
              data-testid="query-button"
              onClick={ this.searchProduct }
            >
              Pesquisar
            </button>
            <Link
              data-testid="shopping-cart-button"
              to="/cart"
            >
              Carrinho
            </Link>
          </div>
          { hasClicked ? <ProductList productList={ productList.results } />
            : (
              <p data-testid="home-initial-message">
                Digite algum termo de pesquisa ou escolha uma categoria.
              </p>
            )}
        </div>
      </div>
    );
  }
}

export default Home;
