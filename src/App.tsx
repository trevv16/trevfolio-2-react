import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import { HomePage } from './views/index';
import { Navigation, Footer } from './components/index';

function App() {
  return (
    <div>
      <Navigation />
      <Router>
        <Switch>
          <Route exact path='/' component={HomePage} />
        </Switch>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
