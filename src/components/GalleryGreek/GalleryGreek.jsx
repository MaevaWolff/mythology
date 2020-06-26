import React, { Component } from 'react';
import greek from '../data/greek.json';

export default class GalleryGreek extends Component {
  render() {
    return (
      <div>
        {greek.map(el => {
          return (
            <div>
              <h1>{el.name}</h1>
              <p>{el.description}</p>
              <img src={require(`${el.cover}`)} alt='cover img' />
            </div>
          );
        })}
      </div>
    );
  }
}
