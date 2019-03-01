import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import ScreenEnquire from './screen/enquire';
import ScreenHome from './screen/home';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <ScreenEnquire />
        <ScreenHome />
      </React.Fragment>
    );
  }
}

export default withRouter(App);