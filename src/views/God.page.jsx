import React, { Component } from 'react';
import greek from '../data/greek.json';

export default class GodPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: parseInt(this.props.location.search.substr(4))
    };
  }

  render() {
    const id = this.state.id;
    const fetchGreek = greek[id];

    return (
      <div>
        <h1>{fetchGreek.name}</h1>
        <p>{fetchGreek.description}</p>
      </div>
    );
  }
}
