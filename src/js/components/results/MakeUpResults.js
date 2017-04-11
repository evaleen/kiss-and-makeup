'use es6';

import React from 'react';
import { each } from 'underscore';

class MakeUpResults extends React.Component {

  static renderResults(searchResults) {
    return searchResults.map((item) => {
      return (
        <div>
          {item.name}
          {item.price}
        </div>
      );
    });
  }

  render() {
    const { type, searchResults, backToSearch } = this.props;
    return (
      <div className="results">
        <button
          onClick={backToSearch}
        >
          Back to search
        </button>
        Results Page  for {type.name}
        {MakeUpResults.renderResults(searchResults)}
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
