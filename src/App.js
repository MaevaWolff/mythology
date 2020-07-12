import React from 'react';
import './scss/styles.scss';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

// import components
import Loader from './components/Loader/Loader';

// import views
import Home from './views/Home';
import Greek from './views/Greek';
import Japonese from './views/Japonese';
import Hindu from './views/Hindu';
import GodPage from './views/God.page';

function App() {
  return (
    <Router>
      <div className='App'>
        <Loader />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/greek' component={Greek} />
          <Route exact path='/japonese' component={Japonese} />
          <Route exact path='/hindu' component={Hindu} />
          <Route exact path='/god' component={GodPage} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
