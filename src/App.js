import React from 'react';
import './scss/styles.scss';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

// import components
import Loader from './components/Loader/Loader';

// import views
import Home from './views/Home';
import Greek from './views/Greek';

function App() {
  return (
    <Router>
      <div className='App'>
        <Loader />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/greek' component={Greek} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
