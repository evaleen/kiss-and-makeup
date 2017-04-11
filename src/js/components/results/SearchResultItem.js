'use es6';

import React from 'react';

class SearchResultItem extends React.Component {

  render() {
    const { item } = this.props;
    return (
      <div className="result-item">
        <p>{item.name}</p>
      </div>
    );
  }
}

SearchResultItem.propTypes = {
  item: React.PropTypes.func.isRequired,
};
export default SearchResultItem;
