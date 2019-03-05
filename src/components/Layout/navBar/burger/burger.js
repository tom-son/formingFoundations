import React from 'react';

const burger = props => {
  return (
    <div 
      onClick={props.clickHandler}
      style={{display: "flex", width: "32px", height: "21px", justifyContent: "space-between", flexDirection: "column"}}
    >
      <div style={{width: "100%", height: "3px", backgroundColor: "white"}}></div>
      <div style={{width: "100%", height: "3px", backgroundColor: "white"}}></div>
      <div style={{width: "100%", height: "3px", backgroundColor: "white"}}></div>
    </div>
  );
};

export default burger;