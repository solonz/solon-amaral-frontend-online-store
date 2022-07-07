import React from 'react';
import { Link } from 'react-router-dom';
import Categories from '../components/Categories';
import ProductList from '../components/ProductList';
import { getProductsFromQuery } from '../services/api';

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
    const {
      inputSearch,
      productList,
    } = this.state;
    this.setState({
      productList: await getProductsFromQuery(inputSearch),
      hasClicked: true,
    });
    console.log(productList.results);
  }

  render() {
    const {
      inputSearch,
      productList,
      hasClicked,
    } = this.state;
    return (
      <>
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
        { hasClicked ? <ProductList productList={ productList.results } />
          : (
            <p data-testid="home-initial-message">
              Digite algum termo de pesquisa ou escolha uma categoria.
            </p>
          )}
        <Categories />
        <Link
          data-testid="shopping-cart-button"
          to="/cart"
        >
          Teste
        </Link>
      </>
    );
  }
}

export default Home;
