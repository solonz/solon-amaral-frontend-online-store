import React from 'react';

class Checkout extends React.Component {
  render() {
    return (
      <div>
        <label htmlFor="fullName">
          Nome completo:
          <input type="text" data-testid="checkout-fullname" id="fullName" />
        </label>
        <label htmlFor="email">
          Email:
          <input type="email" data-testid="checkout-email" id="email" />
        </label>
        <label htmlFor="cpf">
          CPF:
          <input type="text" data-testid="checkout-cpf" id="cpf" />
        </label>
        <label htmlFor="phone">
          Telefone:
          <input type="text" data-testid="checkout-phone" id="phone" />
        </label>
        <label htmlFor="cep">
          CEP:
          <input type="text" data-testid="checkout-cep" id="cep" />
        </label>
        <label htmlFor="address">
          Endereço:
          <input type="text" data-testid="checkout-address" id="address" />
        </label>
      </div>
    );
  }
}

export default Checkout;
