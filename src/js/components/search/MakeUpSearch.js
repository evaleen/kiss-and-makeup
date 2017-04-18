'use es6';

import React from 'react';
import '../../../css/MakeUpSearch.css';
import MakeUpTypes from './MakeUpTypes';
import MakeUpColours from './MakeUpColours';
import MakeUpRanges from './MakeUpRanges';

import Colours from '../../constants/Colours';

const DEFAULT_LIMIT = 128;

class MakeUpSearch extends React.Component {

  static splitColoursIntoBlocks(colours) {
    const colourBlocks = [];
    let startIdx = 0;
    while (startIdx < colours.length) {
      colourBlocks.push(colours.slice(startIdx, startIdx + DEFAULT_LIMIT));
      startIdx += DEFAULT_LIMIT;
    }
    return colourBlocks;
  }


  render() {
    const {
      searchProducts,
      selectedType,
      selectType,
      addColour,
      selectedColours,
      maxPrice,
      updatePriceRange,
      minRating,
      updateRatingRange,
    } = this.props;
    const colourBlocks = MakeUpSearch.splitColoursIntoBlocks(Colours[selectedType]);
    return (
      <div>
        <div className="search-items">
          <MakeUpTypes
            selectedType={selectedType}
            selectType={selectType}
          />
          <MakeUpColours
            colours={colourBlocks}
            selectedColours={selectedColours}
            addColour={addColour}
          />
          <MakeUpRanges
            maxPrice={maxPrice}
            updatePriceRange={updatePriceRange}
            minRating={minRating}
            updateRatingRange={updateRatingRange}
          />
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
  selectedType: React.PropTypes.string.isRequired,
  selectType: React.PropTypes.func.isRequired,
  selectedColours: React.PropTypes.arrayOf(
    React.PropTypes.string,
  ).isRequired,
  addColour: React.PropTypes.func.isRequired,
  searchProducts: React.PropTypes.func.isRequired,
  maxPrice: React.PropTypes.number.isRequired,
  updatePriceRange: React.PropTypes.func.isRequired,
  minRating: React.PropTypes.number.isRequired,
  updateRatingRange: React.PropTypes.func.isRequired,
};

export default MakeUpSearch;
