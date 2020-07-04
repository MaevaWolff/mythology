import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class CarouselItem extends Component {
  render() {
    return (
      <div className='carouselItem'>
        <div className='carouselItem__content'>
          <img
            className='carouselItem__image'
            src={require(`../../assets/${this.props.mythImg}`)}
            alt='img of myth'
          ></img>
        </div>
        <p className='carouselItem__name'>{this.props.mythName}</p>
      </div>
    );
  }
}

CarouselItem.propTypes = {
  mythImg: PropTypes.string.isRequired,
  mythName: PropTypes.string.isRequired
};

CarouselItem.defaultProps = {
  mythName: 'test'
};
