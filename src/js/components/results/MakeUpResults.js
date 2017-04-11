'use es6';

import React from 'react';
import SearchResultItem from './SearchResultItem';
import '../../../css/MakeUpResults.css';

class MakeUpResults extends React.Component {

  static renderResults(searchResults) {
    return searchResults.map((item) => {
      return (
        <SearchResultItem
          key={item.id}
          item={item}
        />
      );
    });
  }

  render() {
    const { type, searchResults, backToSearch } = this.props;
    return (
      <div className="results">
        <button
          className="back-to-search-button"
          onClick={backToSearch}
        >
           &lt; Back to search
        </button>
        <p>Results Page  for {type.name}</p>
        <div className="search-results">
          {MakeUpResults.renderResults(searchResults)}
        </div>
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
export default MakeUpResults;
