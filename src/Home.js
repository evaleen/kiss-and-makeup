'use es6';

import React from 'react';
import logo from './spinnylogo.png';
import './css/Home.css';

import MakeUpSearch from './js/components/search/MakeUpSearch';
import MakeUpResults from './js/components/results/MakeUpResults';
import MakeUpApiClient from './js/api/MakeUpApiClient';

class Home extends React.Component {

  constructor() {
    super();
    this.state = {
      getSearch: false,
      type: {},
      results: [],
    };
    this.selectType = this.selectType.bind(this);
    this.searchProducts = this.searchProducts.bind(this);
    this.backToSearch = this.backToSearch.bind(this);
    this.renderMainContent = this.renderMainContent.bind(this);
  }

  selectType(type) {
    this.setState({ type });
  }

  searchProducts() {
    const { type } = this.state;
    MakeUpApiClient.doSearch(type, (response) => {
      this.setState({
        results: response,
        getSearch: true,
      });
    });
  }

  backToSearch() {
    this.setState({
      type: undefined,
      getSearch: false,
      results: undefined,
    });
  }

  renderMainContent() {
    const { type, results, getSearch } = this.state;
    if (getSearch) {
      return (
        <MakeUpResults
          type={type}
          searchResults={results}
          backToSearch={this.backToSearch}
        />
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
