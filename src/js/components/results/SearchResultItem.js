'use es6';

import React from 'react';
import '../../../css/SearchResultItem.css';


class SearchResultItem extends React.Component {

  render() {
    const { item } = this.props;
    return (
      <div className="result-item">
        <img
          className="product-img"
          src={item.image_link}
          alt={item.name}
        />
        <div className="product-name">{item.name}</div>
      </div>
    );
  }
}

SearchResultItem.propTypes = {
  item: React.PropTypes.shape({
    brand: React.PropTypes.string,
    category: React.PropTypes.string,
    description: React.PropTypes.string.isRequired,
    id: React.PropTypes.number.isRequired,
    image_link: React.PropTypes.string.isRequired,
    name: React.PropTypes.string.isRequired,
    price: React.PropTypes.number,
    product_colors: React.PropTypes.array.isRequired,
    product_link: React.PropTypes.string.isRequired,
    product_type: React.PropTypes.string.isRequired,
    rating: React.PropTypes.number.isRequired,
    website_link: React.PropTypes.string.isRequired,
  }).isRequired,
};
export default SearchResultItem;
