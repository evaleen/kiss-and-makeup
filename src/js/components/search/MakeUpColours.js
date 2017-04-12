'use es6';

import React from 'react';
import classNames from 'classnames';
import { contains } from 'underscore';

import Colours from '../../constants/Colours';
import '../../../css/MakeUpColours.css';

const DEFAULT_LIMIT = 150;

class MakeupColours extends React.Component {

  static renderColours(colours, selectedColours, addColour) {
    let excess = [];
    if (colours.length > DEFAULT_LIMIT) {
      excess = colours.slice(DEFAULT_LIMIT);
      colours = colours.slice(0, DEFAULT_LIMIT);
    }
    return colours.map((colour) => {
      const style = { backgroundColor: colour };
      return (
        <button
          key={colour}
          id={colour}
          style={style}
          onClick={addColour}
          className={
            classNames({
              'colour-block': true,
              'selected-colour-block': contains(selectedColours, colour),
            })
          }
        />
      );
    });
  }

  render() {
    const { selectedType, selectedColours, addColour } = this.props;
    const colours = Colours[selectedType];
    const maybeColours = selectedType
      ? MakeupColours.renderColours(colours, selectedColours, addColour)
      : null;
    return (
      <div className="colour-list">
        <p className="colour-header">2. Select a colour:</p>
        <div className="colour-section">
          {maybeColours}
        </div>
      </div>
    );
  }
}

MakeupColours.propTypes = {
  selectedType: React.PropTypes.string,
  addColour: React.PropTypes.func.isRequired,
  selectedColours: React.PropTypes.arrayOf(
    React.PropTypes.string,
  ).isRequired,
};
MakeupColours.defaultProps = {
  selectedType: undefined,
};

export default MakeupColours;
