import React from 'react';
import './scss/styles.scss';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

// import components
import Home from './components/Home/Home';

function App() {
  return (
    <div className='App'>
      <Home></Home>
    </div>
  );
}

export default App;
