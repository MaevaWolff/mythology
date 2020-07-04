import React from 'react';
import './scss/styles.scss';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

// import components
import Loader from './components/Loader/Loader';

// import views
import Home from './views/Home';

function App() {
  return (
    <Router>
      <div className='App'>
        <Loader />
        <Switch>
          <Route exact path='/' component={Home} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
