import React from 'react';
import { getCategories } from '../services/api';

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

    return (
      <div>
        { categories.map((categorie) => (
          <button type="button" key={ categorie.id } data-testid="category">
            {categorie.name}
          </button>
        ))}
      </div>
    );
  }
}

export default Categories;
