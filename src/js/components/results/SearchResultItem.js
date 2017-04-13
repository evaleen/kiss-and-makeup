'use es6';

import React from 'react';
import '../../../css/SearchResultItem.css';


class SearchResultItem extends React.Component {

  render() {
    const { product, selectProduct } = this.props;
    return (
      <div className="result-product">
        <img
          className="product-img"
          src={product.image_link}
          alt={product.name}
          id={product.id}
          onClick={selectProduct}
        />
        <div className="product-name">
          <a
            onClick={selectProduct}
            id={product.id}
          >
            {product.name}
          </a>
        </div>
      </div>
    );
  }
}

SearchResultItem.propTypes = {
  product: React.PropTypes.shape({
    brand: React.PropTypes.string,
    category: React.PropTypes.string,
    description: React.PropTypes.string,
    id: React.PropTypes.number.isRequired,
    image_link: React.PropTypes.string,
    name: React.PropTypes.string.isRequired,
    price: React.PropTypes.string,
    product_colors: React.PropTypes.array,
    product_link: React.PropTypes.string,
    rating: React.PropTypes.number,
    website_link: React.PropTypes.string.isRequired,
  }).isRequired,
  selectProduct: React.PropTypes.func.isRequired,
};
export default SearchResultItem;
