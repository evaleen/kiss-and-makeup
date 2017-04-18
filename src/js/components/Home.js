'use es6';

import React from 'react';
import { isEmpty, some } from 'underscore';

import logo from '../../img/logo.png';
import '../../css/Home.css';
import MakeUpSearch from './search/MakeUpSearch';
import MakeUpResults from './results/MakeUpResults';
import LoadingDialog from './LoadingDialog';
import MakeUpApiClient from '../api/MakeUpApiClient';
import Types from '../constants/Types';

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
      type: 'BLUSH',
      results: [],
      selectedColours: [],
      maxPrice: 75,
      minRating: 1,
      showLoading: false,
    };
    this.selectType = this.selectType.bind(this);
    this.addColour = this.addColour.bind(this);
    this.searchProducts = this.searchProducts.bind(this);
    this.backToSearch = this.backToSearch.bind(this);
    this.renderMainContent = this.renderMainContent.bind(this);
    this.updatePriceRange = this.updatePriceRange.bind(this);
    this.updateRatingRange = this.updateRatingRange.bind(this);
  }

  updatePriceRange(value) {
    this.setState({ maxPrice: value });
  }

  updateRatingRange(value) {
    this.setState({ minRating: value });
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
    this.setState({ showLoading: true });
    const { type, selectedColours, maxPrice, minRating } = this.state;
    MakeUpApiClient.doSearch(Types[type], maxPrice, minRating, (response) => {
      const filteredResponse = Home.filterByColours(response, selectedColours);
      this.setState({
        results: filteredResponse,
        getSearch: true,
        showLoading: false,
      });
    });
  }

  backToSearch() {
    this.setState({
      type: 'BLUSH',
      getSearch: false,
      results: undefined,
      maxPrice: 75,
      minRating: 1,
    });
  }

  renderMainContent() {
    const { type, results, selectedColours, maxPrice, minRating, getSearch, showLoading } = this.state;
    if (showLoading) {
      return (
        <LoadingDialog />
      );
    }
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
        maxPrice={maxPrice}
        updatePriceRange={this.updatePriceRange}
        minRating={minRating}
        updateRatingRange={this.updateRatingRange}
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
