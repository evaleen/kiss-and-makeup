'use es6';

import React from 'react';
import { isEmpty, some } from 'underscore';

import logo from './spinnylogo.png';
import './css/Home.css';
import MakeUpSearch from './js/components/search/MakeUpSearch';
import MakeUpResults from './js/components/results/MakeUpResults';
import MakeUpApiClient from './js/api/MakeUpApiClient';
import Types from './js/constants/Types';

class Home extends React.Component {

  static filterByColours(products, colours) {
    if (isEmpty(colours)) {
      return products;
    }
    return products.filter((product) => {
      return some(colours, (colour) => {
        return some(product.product_colors, { hex_value: colour });
      });
    });
  }

  constructor() {
    super();
    this.state = {
      getSearch: false,
      type: undefined,
      results: [],
      selectedColours: [],
    };
    this.selectType = this.selectType.bind(this);
    this.addColour = this.addColour.bind(this);
    this.searchProducts = this.searchProducts.bind(this);
    this.backToSearch = this.backToSearch.bind(this);
    this.renderMainContent = this.renderMainContent.bind(this);
  }

  addColour({ target: { id } }) {
    const { selectedColours } = this.state;
    const index = selectedColours.indexOf(id);
    if (index > -1) {
      selectedColours.splice(index, 1);
      this.setState({ selectedColours });
    } else {
      this.setState({ selectedColours: selectedColours.concat([id]) });
    }
  }

  selectType({ target: { id } }) {
    this.setState({
      type: id,
      selectedColours: [],
    });
  }

  searchProducts() {
    const { type, selectedColours } = this.state;
    MakeUpApiClient.doSearch(Types[type], (response) => {
      const filteredResponse = Home.filterByColours(response, selectedColours);
      this.setState({
        results: filteredResponse,
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
    const { type, results, selectedColours, getSearch } = this.state;
    if (getSearch) {
      return (
        <MakeUpResults
          type={Types[type]}
          searchResults={results}
          backToSearch={this.backToSearch}
        />
      );
    }
    return (
      <MakeUpSearch
        selectedType={type}
        selectType={this.selectType}
        addColour={this.addColour}
        selectedColours={selectedColours}
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
