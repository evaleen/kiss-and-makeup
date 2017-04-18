'use es6';

import React from 'react';

import '../../css/LoadingDialog.css';
import loading from '../../img/loading.gif';

class LoadingDialog extends React.Component {

  render() {
    return (
      <div className="loading">
        <img
          src={loading}
          className="loading-gif"
          alt="Loading Gif"
        />
      </div>
    );
  }
}
export default LoadingDialog;
