import React, { Component } from 'react';
import './TitlePage.scss';

export default class TitlePage extends Component {
  render() {
    return (
      <div className='titlePage'>
        <h1 className='titlePage__main'>{this.props.titlePage}</h1>
        <h2 className='titlePage__subtitle'>mythology</h2>
      </div>
    );
  }
}
