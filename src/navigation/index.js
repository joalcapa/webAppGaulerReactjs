import React                  from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
}                             from 'react-router-dom';

import {
  Auth
}         from '../scenes';

const Navigation = () => (
    <Router>
      <Switch>
          <Route path="/login">
            <Auth.Login/>
          </Route>
        </Switch>
    </Router>
);

export default Navigation;