import React from 'react';
import PropTypes from 'prop-types';
import { getCategories } from '../services/api';

import '../styles/categories.css';

class Categories extends React.Component {
  constructor() {
    super();
    this.state = {
      categories: [],
    };
  }

  async componentDidMount() {
    const categories = await getCategories();
    this.setState({
      categories,
    });
  }

  render() {
    const { categories } = this.state;
    const { searchProducts } = this.props;

    return (
      <div className="categoriesContainer">
        { categories.map((categorie) => (
          <button
            type="button"
            key={ categorie.id }
            data-testid="category"
            onClick={ () => (searchProducts(categorie.id)) }
          >
            {categorie.name}
          </button>
        ))}
      </div>
    );
  }
}

Categories.propTypes = {
  searchProducts: PropTypes.array,
}.required;

export default Categories;
