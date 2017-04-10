'use es6';

import React from 'react';
import logo from './logo.svg';
import './css/Home.css';

import MakeUpSearch from './js/components/search/MakeUpSearch';
import MakeUpResults from './js/components/results/MakeUpResults';

const Home = React.createClass({

  getInitialState() {
    return {
      getSearch: false,
    };
  },

  renderMainContent() {
    if (this.state.getSearch) {
      return (
        <MakeUpResults />
      );
    }
    return (
      <MakeUpSearch />
    );
  },

  render() {
    const mainContent = this.renderMainContent();
    return (
      <div className="home">
        <div className="home-header">
          <img src={logo} className="home-logo" alt="logo" />
          <h2>Kiss & Make Up</h2>
        </div>
        <p className="home-body">
          {mainContent}
        </p>
      </div>
    );
  },
});
export default Home;
