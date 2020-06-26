import React from 'react';
import './App.css';
import greek from './data/greek.json';

function App() {
  return (
    <div className='App'>
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
