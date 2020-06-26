import React from 'react';
import './App.css';
import test from './data/test.json';

function App() {
  console.log(test);
  return (
    <div className='App'>
      {test.map(el => {
        return (
          <div>
            <h1>{el.name}</h1>
            <p>{el.description}</p>
            <img src={require(`${el.cover}`)} />
          </div>
        );
      })}
    </div>
  );
}

export default App;
