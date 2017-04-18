'use es6';

import React from 'react';
import classNames from 'classnames';
import { isEqual } from 'underscore';

import Types from '../../constants/Types';
import '../../../css/MakeUpTypes.css';
import '../../../css/common/header.css';

class MakeUpTypes extends React.Component {

  renderTypes() {
    const { selectedType, selectType } = this.props;
    return Object.keys(Types).map((key) => {
      const type = Types[key];
      return (
        <button
          key={key}
          id={key}
          className={
            classNames({
              'type-list-item': true,
              'selected-type-list-item': isEqual(selectedType, key),
            })
          }
          onClick={selectType}
        >
          <span className="type-list-item-text">{type.name}</span>
          <div className="type-list-item-arrow">&gt;</div>
        </button>
      );
    });
  }

  render() {
    return (
      <div className="type-list">
        <p className="header">1. Select a type</p>
        {this.renderTypes()}
      </div>
    );
  }
}

MakeUpTypes.propTypes = {
  selectedType: React.PropTypes.string,
  selectType: React.PropTypes.func.isRequired,
};
MakeUpTypes.defaultProps = {
  selectedType: undefined,
};

export default MakeUpTypes;
