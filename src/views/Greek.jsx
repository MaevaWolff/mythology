import React, { Component } from 'react';

import Header from '../components/Header/Header';
import TitlePage from '../components/TitlePage/TitlePage';
import GalleryGreek from '../components/GalleryGreek/GalleryGreek';

export default class Greek extends Component {
  render() {
    return (
      <div>
        <Header></Header>
        <TitlePage titlePage='Greek'></TitlePage>
        <div className='galleries'>
          <GalleryGreek></GalleryGreek>
        </div>
      </div>
    );
  }
}
