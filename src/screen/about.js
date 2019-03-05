import React from 'react';
import { Route, Switch } from 'react-router-dom';
import About from '../components/about/about';

const aboutUs = props => {
  return (
    <Switch>
      <Route path="/about" component={About} />
    </Switch>
  );
};

export default aboutUs;