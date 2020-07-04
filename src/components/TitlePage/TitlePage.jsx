import React, { Component } from 'react';
import PropTypes from 'prop-types';

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

TitlePage.propTypes = {
  titlePage: PropTypes.string.isRequired
};

TitlePage.defaultProps = {
  titlePage: 'name'
};
