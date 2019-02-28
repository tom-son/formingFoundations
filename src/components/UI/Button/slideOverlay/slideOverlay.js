import React from 'react';
import classes from './slideOverlay.module.scss';
import Button from '../Button/Button';

const sliding = props => {
  return (
    <Button>
      {(isHover)=> (
        <React.Fragment>
          <span 
            style={{
              display: "inline-block",
              opacity: `${isHover ? 0 : 1}`,
              transition: "0.2s ease-out",
              transform: `${isHover ? "translate(-20px, 0)": "translate(0px, 0)"}`
            }}
          >
            GET DIRECTIONS
          </span>
          <span
            style={{
              display: "block",
              position: "absolute",
              top: "0px",
              left: "0px",
              width: "150%",
              height: "100%",
              opacity: `${isHover ? 1 : 0}`,
              transition: "0.3s ease-out",
              transform: `${isHover ? "translate(-10%, 0px) skew(-45deg)" : "translate(100%, 0)"}`,
              backgroundColor: "rgba(150,0,0,0.6)"
            }}
          >
          </span>
          <span
            style={{
              position: "absolute",
              top: "50%",
              left: "0%",
              width: "100%", 
              transform: `${isHover ? "translate(0%, -50%)" : "translate(15%, -50%)"}`,
              transition: "0.2s ease",
              opacity: `${isHover ? 1 : 0}`,
            }}
          >GET DIRECTIONS</span>
        </React.Fragment>
      )}
    </Button>
  );
};

export default sliding;