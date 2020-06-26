import React from 'react';
import './App.css';
import test from './data/test.json';

function App() {
  console.log(test);
  return (
    <div className='App'>
      {test.map(el => {
        return <h1>{el.title}</h1>;
      })}
    </div>
  );
}

export default App;
