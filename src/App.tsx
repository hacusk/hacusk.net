import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';

import './App.scss';
import { Home, Footer, Header } from './features'

const App = () => {
  return (
    <Router>
      {Header()}
      <Switch>
        <Route path="/social">
          <div>
            <h1>social!</h1>
          </div>
        </Route>
        <Route path="/">
          {Home()}
        </Route>
      </Switch>
      {Footer()}
    </Router>
  );
}

export default App;
