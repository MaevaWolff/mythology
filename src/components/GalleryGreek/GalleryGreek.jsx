import React, { Component } from 'react';
import greek from '../../data/greek.json';

import Gallery from '../Gallery/Gallery';

export default class GalleryGreek extends Component {
  render() {
    return (
      <div className='galleryContainer'>
        {greek.map(el => {
          return (
            <Gallery
              galleryName={el.name}
              galleryDesc={el.description}
              galleryCover={el.cover}
            ></Gallery>
          );
        })}
      </div>
    );
  }
}
