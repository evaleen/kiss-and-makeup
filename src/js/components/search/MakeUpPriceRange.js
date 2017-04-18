'use es6';

import React from 'react';
import Slider from 'react-rangeslider';

import '../../../css/MakeUpRange.css';
import '../../../css/components/range-slider.css';
import '../../../css/components/header.css';

class MakeUpPriceRange extends React.Component {

  render() {
    const { value, updatePriceRange } = this.props;
    return (
      <div className="price-range">
        <p className="header">3. Select a price range</p>
        <div className="range">
          <Slider
            min={0}
            max={75}
            value={value}
            labels={{ 0: '$0', 25: '$25', 50: '$50', 75: '$75' }}
            onChange={updatePriceRange}
          />
        </div>
      </div>
    );
  }
}
MakeUpPriceRange.propTypes = {
  value: React.PropTypes.number.isRequired,
  updatePriceRange: React.PropTypes.func.isRequired,
};
export default MakeUpPriceRange;
