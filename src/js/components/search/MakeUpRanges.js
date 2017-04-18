'use es6';

import React from 'react';
import Slider from 'react-rangeslider';

import '../../../css/MakeUpRanges.css';
import '../../../css/common/range-slider.css';
import '../../../css/common/header.css';

class MakeUpPriceRange extends React.Component {

  render() {
    const { maxPrice, updatePriceRange, minRating, updateRatingRange } = this.props;
    return (
      <div className="make-up-ranges">
        <p className="header">3. Change default ranges</p>
        <div className="range">
          <p>Price range: $0 - ${maxPrice}</p>
          <Slider
            min={0}
            max={75}
            value={maxPrice}
            labels={{ 0: '$0', 25: '$25', 50: '$50', 75: '$75' }}
            onChange={updatePriceRange}
          />
        </div>
        <div className="range">
          <p>Rating: {minRating}/5 - 5/5</p>
          <Slider
            min={1}
            max={5}
            value={minRating}
            labels={{ 1: '1', 2: '2', 3: '3', 4: '4', 5: '5' }}
            onChange={updateRatingRange}
          />
        </div>
      </div>
    );
  }
}
MakeUpPriceRange.propTypes = {
  maxPrice: React.PropTypes.number.isRequired,
  updatePriceRange: React.PropTypes.func.isRequired,
  minRating: React.PropTypes.number.isRequired,
  updateRatingRange: React.PropTypes.func.isRequired,
};
export default MakeUpPriceRange;
