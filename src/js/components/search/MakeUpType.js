'use es6';

import React from 'react';
import classNames from 'classnames';
import { isEqual, isEmpty } from 'underscore';

import '../../../css/MakeUpType.css';

class MakeUpType extends React.Component {

  render() {
    const { type, id, selectedType, selectType } = this.props;
    return (
      <div
        className={classNames({
          'make-up-type': true,
          'selected-make-up-type': !isEmpty(selectedType) && isEqual(selectedType, type),
        })}
      >
        <button
          onClick={() => selectType(type)}
          alt={type.name}
          className={classNames('type-img', `type-img-${id}`)}
        />
        <div className="type-text">
          {type.name}
        </div>
      </div>
    );
  }
}

MakeUpType.propTypes = {
  type: React.PropTypes.shape({
    product: React.PropTypes.string,
    category: React.PropTypes.string,
    name: React.PropTypes.string,
  }).isRequired,
  selectedType: React.PropTypes.shape({
    product: React.PropTypes.string,
    category: React.PropTypes.string,
    name: React.PropTypes.string,
  }).isRequired,
  selectType: React.PropTypes.func.isRequired,
  id: React.PropTypes.string.isRequired,
};

export default MakeUpType;
