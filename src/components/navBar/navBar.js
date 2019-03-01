import React from 'react';
import Burger from './burger/burger';

const navBar = props => {
  return (
    <nav style={{
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center"
    }}>
      <span style={{letterSpacing: "2px", fontSize: "2rem"}}>FF</span>
      <Burger />
    </nav>
  );
};

export default navBar;