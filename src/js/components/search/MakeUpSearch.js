'use es6';

import React from 'react';

import '../../../css/MakeUpSearch.css';
import MakeUpTypeList from './MakeUpTypeList';
import MakeUpColours from './MakeUpColours';

class MakeUpSearch extends React.Component {

  render() {
    const { searchProducts, selectedType, selectType, addColour, selectedColours } = this.props;
    return (
      <div>
        <div className="search-items">
          <MakeUpTypeList
            selectedType={selectedType}
            selectType={selectType}
          />
          <MakeUpColours
            selectedType={selectedType}
            selectedColours={selectedColours}
            addColour={addColour}
          />
          <div className="range">3. Select a range}</div>
        </div>
        <div className="search">
          <button
            className="search-button"
            onClick={searchProducts}
          >
            Search
          </button>
        </div>
      </div>
    );
  }
}

MakeUpSearch.propTypes = {
  selectedType: React.PropTypes.string,
  selectType: React.PropTypes.func.isRequired,
  selectedColours: React.PropTypes.arrayOf(
    React.PropTypes.string,
  ).isRequired,
  addColour: React.PropTypes.func.isRequired,
  searchProducts: React.PropTypes.func.isRequired,
};
MakeUpSearch.defaultProps = {
  selectedType: undefined,
};

export default MakeUpSearch;
