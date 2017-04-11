'use es6';

import React from 'react';
import logo from './spinnylogo.png';
import './css/Home.css';

import MakeUpSearch from './js/components/search/MakeUpSearch';
import MakeUpResults from './js/components/results/MakeUpResults';

class Home extends React.Component {

  constructor() {
    super();
    this.state = {
      getSearch: false,
      type: undefined,
    };
    this.selectType = this.selectType.bind(this);
    this.searchProducts = this.searchProducts.bind(this);
    this.renderMainContent = this.renderMainContent.bind(this);
  }

  selectType({ target: { value } }) {
    this.setState({ type: value });
  }

  searchProducts() {
    // Check all data correct?
    // Do search request
    this.setState({ getSearch: true });
  }

  renderMainContent() {
    const { type, getSearch } = this.state;
    if (getSearch) {
      return (
        <MakeUpResults />
      );
    }
    return (
      <MakeUpSearch
        selectedType={type}
        selectType={this.selectType}
        searchProducts={this.searchProducts}
      />
    );
  }

  render() {
    const mainContent = this.renderMainContent();
    return (
      <div className="home">
        <div className="home-header">
          <img src={logo} className="home-logo" alt="logo" />
          <h2>Kiss & Make Up</h2>
        </div>
        <div className="home-body">
          {mainContent}
        </div>
      </div>
    );
  }
}

export default Home;
