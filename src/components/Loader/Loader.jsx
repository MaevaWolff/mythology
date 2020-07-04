import React, { Component } from 'react';
import './Loader.scss';

export default class Loader extends Component {
  constructor() {
    super();
    this.state = {
      visible: true
    };
  }
  componentDidMount() {
    setTimeout(() => {
      this.setState({
        visible: false
      });
      console.log(this.state.visible);
    }, 3000);
  }

  render() {
    return (
      <div className={this.state.visible ? 'loader' : 'loader none'}>
        <div className='loader__content'>
          <h1 className='loader__title'>ZEUS.</h1>
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

        <p className='loader__subtitle'>Lorem ipsum</p>
      </div>
    );
  }
}
