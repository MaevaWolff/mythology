import React, { Component } from 'react';
import './Home.scss';

export default class Home extends Component {
  render() {
    return (
      <div class='home'>
        <div className='home__content'>
          <h1 className='home__title'>ZEUS.</h1>
          <svg
            width='298'
            height='298'
            viewBox='0 0 298 298'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <rect
              x='148.585'
              y='2.82843'
              width='206.131'
              height='206.131'
              transform='rotate(45 148.585 2.82843)'
              stroke='#F2F2F2'
              stroke-width='4'
            />
          </svg>
        </div>

        <p className='home__subtitle'>Lorem ipsum</p>
      </div>
    );
  }
}
