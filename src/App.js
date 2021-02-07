import React, { useState } from 'react';
import Home from './components/Home';
import Joblist from './components/Joblist';
import Details from './components/Details';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { ContextProvider } from './Context';

const App = () => {
  return (
    <Router>
      <div>
        <Switch>
          <ContextProvider>
            <Route path='/' exact component={Home} />
            <Route path='/joblist/' exact component={Joblist} />
            <Route path='/details/:id' exact component={Details} />
          </ContextProvider>
        </Switch>
      </div>
    </Router>
  );
};

export default App;
