import React from 'react';
import { Link } from 'react-router-dom';
import Categories from '../components/Categories';

class Home extends React.Component {
  render() {
    return (
      <>
        <label htmlFor="input-search">
          <input name="input-search" type="text" />
        </label>
        <p
          data-testid="home-initial-message "
        >
          Digite algum termo de pesquisa ou escolha uma categoria.
        </p>
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
