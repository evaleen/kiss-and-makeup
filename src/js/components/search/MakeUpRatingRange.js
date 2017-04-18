'use es6';

import React from 'react';
import Slider from 'react-rangeslider';

import '../../../css/MakeUpRange.css';
import '../../../css/components/range-slider.css';
import '../../../css/components/header.css';

class MakeUpRatingRange extends React.Component {

  render() {
    const { value, updateRatingRange } = this.props;
    return (
      <div className="rating-range">
        <p className="header">4. Select a rating range</p>
        <div className="range">
          <Slider
            min={1}
            max={5}
            value={value}
            labels={{ 1: '1', 2: '2', 3: '3', 4: '4', 5: '5' }}
            onChange={updateRatingRange}
          />
        </div>
      </div>
    );
  }
}
MakeUpRatingRange.propTypes = {
  value: React.PropTypes.number.isRequired,
  updateRatingRange: React.PropTypes.func.isRequired,
};
export default MakeUpRatingRange;
