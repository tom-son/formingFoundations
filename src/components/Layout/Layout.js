import React from 'react';
import NavBar from '../navBar/navBar';

class Layout extends React.Component {
  render() {
    return (
      <React.Fragment>
        <NavBar />
        {this.props.children}
        <div style={{height: "600px", backgroundColor: "#151515"}}>
        </div>
      </React.Fragment>
    );
  };
};

export default Layout;