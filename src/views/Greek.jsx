import React, { Component } from 'react';

import Header from '../components/Header/Header';
import TitlePage from '../components/TitlePage/TitlePage';
import GalleryGreek from '../components/GalleryGreek/GalleryGreek';

export default class Greek extends Component {
  render() {
    return (
      <div className='greek'>
        <Header></Header>
        <TitlePage titlePage='Greek'></TitlePage>

        <GalleryGreek></GalleryGreek>
      </div>
    );
  }
}
