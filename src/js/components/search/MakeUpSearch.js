'use es6';

import React from 'react';

import '../../../css/MakeUpSearch.css';
import Types from '../../constants/Types';

import MakeUpType from './MakeUpType';

class MakeUpSearch extends React.Component {

  renderTypes() {
    const { selectedType, selectType } = this.props;
    return Object.keys(Types).map((key) => {
      return (
        <MakeUpType
          key={key}
          id={key}
          type={Types[key]}
          selectedType={selectedType}
          selectType={selectType}
        />);
    });
  }

  render() {
    const { searchProducts } = this.props;
    return (
      <div className="search">
        <div className="types">
          {this.renderTypes()}
        </div>
        <button
          className="search-button"
          onClick={searchProducts}
        >
          Search
        </button>
      </div>
    );
  }
}

MakeUpSearch.propTypes = {
  selectedType: React.PropTypes.shape({
    product: React.PropTypes.string,
    category: React.PropTypes.string,
    name: React.PropTypes.string,
  }),
  selectType: React.PropTypes.func.isRequired,
  searchProducts: React.PropTypes.func.isRequired,
};
MakeUpSearch.defaultProps = {
  selectedType: {},
};

export default MakeUpSearch;
