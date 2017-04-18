'use es6';

import React from 'react';
import '../../../css/MakeUpSearch.css';
import MakeUpTypeList from './MakeUpTypeList';
import MakeUpColours from './MakeUpColours';
import Colours from '../../constants/Colours';

const DEFAULT_LIMIT = 112;

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
    const { searchProducts, selectedType, selectType, addColour, selectedColours } = this.props;
    const colourBlocks = selectedType
      ? MakeUpSearch.splitColoursIntoBlocks(Colours[selectedType])
      : [];
    return (
      <div>
        <div className="search-items">
          <MakeUpTypeList
            selectedType={selectedType}
            selectType={selectType}
          />
          <MakeUpColours
            colours={colourBlocks}
            selectedColours={selectedColours}
            addColour={addColour}
          />
          <div className="range">3. Select a range</div>
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
