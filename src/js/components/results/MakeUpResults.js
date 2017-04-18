'use es6';

import React from 'react';
import classNames from 'classnames';
import { findWhere, isEmpty } from 'underscore';

import SearchResultItem from './SearchResultItem';
import ProductInformationModal from './ProductInformationModal';
import '../../../css/MakeUpResults.css';
import '../../../css/common/button.css';

class MakeUpResults extends React.Component {

  constructor() {
    super();
    this.state = {
      selectedProduct: undefined,
    };
    this.selectProduct = this.selectProduct.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  selectProduct({ target: { id } }) {
    this.setState({
      selectedProduct: id,
    });
  }

  closeModal() {
    this.setState({
      selectedProduct: undefined,
    });
  }

  maybeRenderProductModal(products) {
    const { selectedProduct } = this.state;
    if (!isEmpty(selectedProduct)) {
      const product = findWhere(products, { id: parseInt(selectedProduct, 10) });
      return (
        <ProductInformationModal
          product={product}
          closeModal={this.closeModal}
        />
      );
    }
    return null;
  }

  renderResults(searchResults) {
    if (isEmpty(searchResults)) {
      return (
        <div className="no-results">
          <span>No products matched this search. Try again!</span>
        </div>
      );
    }
    return searchResults.map((product) => {
      return (
        <SearchResultItem
          key={product.id}
          product={product}
          selectProduct={this.selectProduct}
        />
      );
    });
  }

  render() {
    const { type, searchResults, backToSearch } = this.props;
    const maybeProductModal = this.maybeRenderProductModal(searchResults);
    return (
      <div
        className={classNames({
          'search-results': true,
          'modal-open': !isEmpty(this.state.selectedProduct),
        })}
      >
        <div className="results-header">
          <button
            className="btn back-to-search-button"
            onClick={backToSearch}
          >
             &lt; Back to search
          </button>
          <h1>Results Page  for {type.name}</h1>
        </div>
        <div className="search-results">
          {this.renderResults(searchResults)}
        </div>
        {maybeProductModal}
      </div>
    );
  }
}

MakeUpResults.propTypes = {
  type: React.PropTypes.shape({
    product: React.PropTypes.string.isRequired,
    category: React.PropTypes.string,
    name: React.PropTypes.string.isRequired,
  }).isRequired,
  searchResults: React.PropTypes.arrayOf(
    React.PropTypes.object,
  ).isRequired,
  backToSearch: React.PropTypes.func.isRequired,
};
MakeUpResults.defaultProps = {
  selectedColours: [],
};
export default MakeUpResults;
