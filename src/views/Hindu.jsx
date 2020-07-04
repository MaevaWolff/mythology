import React, { Component } from 'react';

import Header from '../components/Header/Header';
import TitlePage from '../components/TitlePage/TitlePage';

export default class Greek extends Component {
  render() {
    return (
      <div>
        <Header></Header>
        <TitlePage titlePage='Hindu'></TitlePage>
      </div>
    );
  }
}
