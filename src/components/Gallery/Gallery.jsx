import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import './Gallery.scss';

export default class Gallery extends Component {
  render() {
    return (
      <div className='gallery'>
        <Link to={this.props.galleryPath}>
          <h1 className='gallery__name'>{this.props.galleryName}</h1>
          <img
            className='gallery__cover'
            src={require(`../../assets/${this.props.galleryCover}`)}
            alt='cover img'
          />
        </Link>
      </div>
    );
  }
}

Gallery.propTypes = {
  galleryPath: PropTypes.string.isRequired,
  galleryName: PropTypes.string.isRequired,
  galleryCover: PropTypes.string
};

Gallery.defaultProps = {
  galleryPath: '/',
  galleryName: 'Name of God'
};
