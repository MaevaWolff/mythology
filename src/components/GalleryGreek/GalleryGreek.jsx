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
              galleryPath={`/god?id=${el.yourID}`}
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
