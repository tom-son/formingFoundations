import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import ScreenEnquire from './screen/enquire';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <ScreenEnquire />
      </React.Fragment>
    );
  }
}

export default withRouter(App);