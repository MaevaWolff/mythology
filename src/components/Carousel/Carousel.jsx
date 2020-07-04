import React, { Component } from 'react';
import './Carousel.scss';

import CarouselItem from './CarouselItem';

export default class Carousel extends Component {
  render() {
    return (
      <div className='carousel'>
        <CarouselItem
          mythImg='japonesehome.png'
          mythName='japonese mythology'
        ></CarouselItem>
        <CarouselItem
          mythImg='greekhome.png'
          mythName='greek mythology'
        ></CarouselItem>
        <CarouselItem
          mythImg='hinduhome.png'
          mythName='hindu mythology'
        ></CarouselItem>
      </div>
    );
  }
}
