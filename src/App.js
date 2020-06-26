import React from 'react';
import './scss/styles.scss';
import greek from './data/greek.json';

// import components
import Home from './components/Home/Home';

function App() {
  return (
    <div className='App'>
      <Home></Home>
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

export default App;
