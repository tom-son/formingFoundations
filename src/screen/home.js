import React from 'react';
import { Route } from 'react-router-dom';
import Home from '../components/home/home';

const home = props => {
  return (
    <React.Fragment>
      <Route path="/" exact component={Home} />
    </React.Fragment>
  );
};

export default home;