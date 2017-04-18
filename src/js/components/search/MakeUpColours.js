'use es6';

import React from 'react';
import classNames from 'classnames';
import { contains, isEmpty } from 'underscore';

import '../../../css/MakeUpColours.css';
import '../../../css/components/header.css';

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

  constructor() {
    super();
    this.state = {
      pageNum: 0,
    };
    this.incPageNumber = this.incPageNumber.bind(this);
    this.decPageNumber = this.decPageNumber.bind(this);
  }

  incPageNumber() {
    const { pageNum } = this.state;
    this.setState({ pageNum: pageNum + 1 });
  }

  decPageNumber() {
    const { pageNum } = this.state;
    this.setState({ pageNum: pageNum - 1 });
  }

  renderColours(colours, selectedColours, addColour) {
    const { pageNum } = this.state;
    let maybePaginators;
    if (colours.length > 1) {
      maybePaginators = (
        <div className="colour-pagination">
          <button
            className={classNames({
              'btn': true,
              'colour-paginator': true,
              'paginator-disabled': pageNum === 0,
            })}
            onClick={this.decPageNumber}
          >
            &lt;&lt;
          </button>
          <button
            className={classNames({
              'btn': true,
              'colour-paginator': true,
              'more-paginator': true,
              'paginator-disabled': pageNum === (colours.length - 1),
            })}
            onClick={this.incPageNumber}
          >
            &gt;&gt;
          </button>
        </div>
      );
    }
    return (
      <div className="colour-section">
        {MakeUpColours.renderBlockOfColours(colours[pageNum], selectedColours, addColour)}
        {maybePaginators}
      </div>
    );
  }

  render() {
    const { colours, selectedColours, addColour } = this.props;
    const maybeColours = !isEmpty(colours)
      ? this.renderColours(colours, selectedColours, addColour)
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
};
MakeUpColours.defaultProps = {
  colours: [],
};

export default MakeUpColours;
