import React, { Component } from 'react';

import Header from '../components/Header/Header';

export default class Home extends Component {
  render() {
    return (
      <div className='home'>
        <Header></Header>
        <h1>coucou</h1>
      </div>
    );
  }
}
