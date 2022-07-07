import React from 'react';

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
      </>
    );
  }
}

export default Home;
