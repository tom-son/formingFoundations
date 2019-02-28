import React from 'react';
import { Route } from 'react-router-dom';
// import Enquire from '../components/Enquire/Enquire';
import RoleSelection from '../components/Enquire/roleSeclection/roleSelection';
import EnquireForm from '../components/Enquire/Form/Form';

const enquire = props => {
  return (
    <React.Fragment>
      <Route path="/enquire" exact component={RoleSelection} />
      <Route path="/enquire/student" render={props=><EnquireForm {...props} title="student" />}/>
      <Route path="/enquire/parent" render={props=><EnquireForm {...props} title="parent" />}/>
    </React.Fragment>
  );
};

export default enquire;