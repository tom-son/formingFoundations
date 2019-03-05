import React from 'react';
import classes from './Enquire.module.scss';
import Form from './Form/Form';

class Enquire extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div className={classes.enquireHeader}>
          <h1>Tell us a bit about yourself!</h1>
        </div>
        <Form />
      </React.Fragment>
    );
  };
};

export default Enquire;