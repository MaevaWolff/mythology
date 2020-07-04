import React from 'react';
import './scss/styles.scss';
import { BrowserRouter as Router } from 'react-router-dom';

// import components
import Home from './components/Home/Home';
import Header from './components/Header/Header';

function App() {
  return (
    <Router>
      <div className='App'>
        {/* <Home></Home> */}
        <Header></Header>
      </div>
    </Router>
  );
}

export default App;
