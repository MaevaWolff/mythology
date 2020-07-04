import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './Carousel.scss';

import CarouselItem from './CarouselItem';

export default class Carousel extends Component {
  render() {
    return (
      <div className='carousel'>
        <Link to='/japonese'>
          <CarouselItem
            mythImg='japonesehome.png'
            mythName='japonese mythology'
          ></CarouselItem>
        </Link>
        <Link to='/greek'>
          <CarouselItem
            mythImg='greekhome.png'
            mythName='greek mythology'
          ></CarouselItem>
        </Link>
        <Link to='/hindu'>
          <CarouselItem
            mythImg='hinduhome.png'
            mythName='hindu mythology'
          ></CarouselItem>
        </Link>
      </div>
    );
  }
}
