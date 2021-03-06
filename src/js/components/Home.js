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
import { maxPriceOfProduct, minRatingOfProduct } from '../constants/ProductParameters';

const initialState = {
  type: 'LIPSTICK',
  getSearch: false,
  results: [],
  selectedColours: [],
  maxPrice: maxPriceOfProduct,
  minRating: minRatingOfProduct,
  showLoading: false,
  colourPageNumber: 0,
};

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
    this.state = initialState;
    this.selectType = this.selectType.bind(this);
    this.addColour = this.addColour.bind(this);
    this.searchProducts = this.searchProducts.bind(this);
    this.backToSearch = this.backToSearch.bind(this);
    this.renderMainContent = this.renderMainContent.bind(this);
    this.updatePriceRange = this.updatePriceRange.bind(this);
    this.updateRatingRange = this.updateRatingRange.bind(this);
    this.incColourPageNumber = this.incColourPageNumber.bind(this);
    this.decColourPageNumber = this.decColourPageNumber.bind(this);
  }

  updatePriceRange(value) {
    this.setState({ maxPrice: value });
  }

  updateRatingRange(value) {
    this.setState({ minRating: value });
  }

  incColourPageNumber() {
    const { colourPageNumber } = this.state;
    this.setState({ colourPageNumber: colourPageNumber + 1 });
  }

  decColourPageNumber() {
    const { colourPageNumber } = this.state;
    this.setState({ colourPageNumber: colourPageNumber - 1 });
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
      colourPageNumber: 0,
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
    this.setState(initialState);
  }

  renderMainContent() {
    const { type, results, selectedColours, colourPageNumber, maxPrice, minRating, getSearch, showLoading } = this.state;
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
        colourPageNumber={colourPageNumber}
        incColourPageNumber={this.incColourPageNumber}
        decColourPageNumber={this.decColourPageNumber}
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
