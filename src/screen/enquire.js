import React from 'react';
import { Route } from 'react-router-dom';
import Enquire from '../components/Enquire/Enquire';

const enquire = props => {
  return (
    <React.Fragment>
      <Route path="/enquire" render={props=><Enquire {...props} />}/>
    </React.Fragment>
  );
};

export default enquire;