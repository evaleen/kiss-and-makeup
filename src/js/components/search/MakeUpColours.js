'use es6';

import React from 'react';
import classNames from 'classnames';
import { contains, isEmpty } from 'underscore';

import '../../../css/MakeUpColours.css';
import '../../../css/common/header.css';

class MakeUpColours extends React.Component {

  static renderBlockOfColours(colours, selectedColours, addColour) {
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

  renderColours(colours) {
    const { selectedColours, addColour, pageNumber, incPageNumber, decPageNumber } = this.props;
    let maybePaginators;
    if (colours.length > 1) {
      maybePaginators = (
        <div className="colour-pagination">
          <button
            className={classNames({
              'btn': true,
              'colour-paginator': true,
              'paginator-disabled': pageNumber === 0,
            })}
            onClick={decPageNumber}
          >
            &lt;&lt;
          </button>
          <button
            className={classNames({
              'btn': true,
              'colour-paginator': true,
              'more-paginator': true,
              'paginator-disabled': pageNumber === (colours.length - 1),
            })}
            onClick={incPageNumber}
          >
            &gt;&gt;
          </button>
        </div>
      );
    }
    return (
      <div className="colour-section">
        {MakeUpColours.renderBlockOfColours(colours[pageNumber], selectedColours, addColour)}
        {maybePaginators}
      </div>
    );
  }

  render() {
    const { colours } = this.props;
    const maybeColours = !isEmpty(colours)
      ? this.renderColours(colours)
      : null;
    return (
      <div className="colour-list">
        <p className="header">2. Select a colour</p>
        {maybeColours}
      </div>
    );
  }
}

MakeUpColours.propTypes = {
  colours: React.PropTypes.arrayOf(
    React.PropTypes.arrayOf(
      React.PropTypes.string,
    ),
  ),
  addColour: React.PropTypes.func.isRequired,
  selectedColours: React.PropTypes.arrayOf(
    React.PropTypes.string,
  ).isRequired,
  pageNumber: React.PropTypes.number.isRequired,
  incPageNumber: React.PropTypes.func.isRequired,
  decPageNumber: React.PropTypes.func.isRequired,
};
MakeUpColours.defaultProps = {
  colours: [],
};

export default MakeUpColours;
