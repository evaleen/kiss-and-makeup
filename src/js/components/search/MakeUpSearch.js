'use es6';

import React from 'react';
import classNames from 'classnames';
import { isEqual, isEmpty } from 'underscore';

import '../../../css/MakeUpSearch.css';
import Types from '../../constants/Types';

class MakeUpSearch extends React.Component {

  renderTypes() {
    const { selectedType, selectType } = this.props;
    const types = [];
    Object.keys(Types).forEach((key) => {
      const type = Types[key];
      const typeDisplay = (
        <div
          key={key}
          className={classNames({
            'make-up-type': true,
            'selected-make-up-type': !isEmpty(selectedType) && isEqual(selectedType, key),
          })}
        >
          <button
            onClick={selectType}
            value={key}
            alt={type.name}
            className={classNames('type-img', `type-img-${key}`)}
          />
          <div className="type-text">
            {type.name}
          </div>
        </div>
      );
      types.push(typeDisplay);
    });
    return types;
  }

  render() {
    const { searchProducts } = this.props;
    return (
      <div className="search">
        { this.renderTypes()}
        <button
          className="search-button"
          onClick={searchProducts}
        >
          Search
        </button>
      </div>
    );
  }
}

MakeUpSearch.propTypes = {
  selectedType: React.PropTypes.string,
  selectType: React.PropTypes.func.isRequired,
  searchProducts: React.PropTypes.func.isRequired,
};
export default MakeUpSearch;
