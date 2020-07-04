import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Header.scss';

export default class Header extends Component {
  render() {
    return (
      <div className='header'>
        <p className='header__logo'>ZEUS.</p>
        <Link className='header__link' to='/'>
          home
        </Link>
      </div>
    );
  }
}
