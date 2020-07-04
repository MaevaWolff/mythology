import React, { Component } from 'react';

import Header from '../components/Header/Header';
import Carousel from '../components/Carousel/Carousel';

export default class Home extends Component {
  render() {
    return (
      <div className='home'>
        <Header></Header>
        <Carousel></Carousel>
      </div>
    );
  }
}
