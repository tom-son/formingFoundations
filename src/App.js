import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import ScreenEnquire from './screen/enquire';
import ScreenHome from './screen/home';
import ScreenContactUs from './screen/contactUs';
import ScreenAbout from './screen/about';


class App extends Component {
  render() {
    return (
      <React.Fragment>
        <ScreenEnquire />
        <ScreenHome />
        <ScreenContactUs />
        <ScreenAbout />
      </React.Fragment>
    );
  }
}

export default withRouter(App);