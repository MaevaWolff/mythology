import React, { Component } from 'react';

export default class CarouselItem extends Component {
  // constructor(props){
  //   super(props) {
  //     mythImage: String,
  //     mythName: String
  //   }
  // }
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
