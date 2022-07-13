import React from 'react';
import Proptypes from 'prop-types';

class AvaliationForm extends React.Component {
  constructor() {
    super();
    this.state = {
      inputEmail: '',
      inputSelect: '1',
      inputEvaluation: '',
    };
  }

  handleChange = ({ target }) => {
    const { name } = target;
    const { value } = target;
    this.setState({
      [name]: value,
    });
  }

  handleSubmmit = () => {
    const { inputEmail, inputSelect, inputEvaluation } = this.state;
    const { addToEvaluator, productId } = this.props;

    addToEvaluator(inputEmail, inputSelect, inputEvaluation, productId);
    this.setState({
      inputEmail: '',
      inputSelect: '1',
      inputEvaluation: '',
    });
  }

  render() {
    const { inputEmail, inputSelect, inputEvaluation } = this.state;
    return (
      <div>
        <label htmlFor="input-email">
          <input
            type="text"
            id="input-email"
            placeholder="E-mail"
            data-testid="product-detail-email"
            value={ inputEmail }
            name="inputEmail"
            onChange={ this.handleChange }
          />
        </label>
        <label htmlFor="product-ratio">
          <select
            value={ inputSelect }
            name="inputSelect"
            onChange={ this.handleChange }
          >
            <option data-testid="1-rating" value="1">1</option>
            <option data-testid="2-rating" value="2">2</option>
            <option data-testid="3-rating" value="3">3</option>
            <option data-testid="4-rating" value="4">4</option>
            <option data-testid="5-rating" value="5">5</option>
          </select>
        </label>
        <label htmlFor="product-detail-evaluation">
          <textarea
            id="product-detail-evaluation"
            name="inputEvaluation"
            data-testid="product-detail-evaluation"
            value={ inputEvaluation }
            onChange={ this.handleChange }
          />
        </label>
        <button
          type="button"
          data-testid="submit-review-btn"
          id="submit-review-btn"
          onClick={ this.handleSubmmit }
        >
          Avaliar
        </button>
      </div>
    );
  }
}

AvaliationForm.propTypes = {
  addToEvaluator: Proptypes.func,
  productId: Proptypes.string,
}.isRequired;

export default AvaliationForm;
