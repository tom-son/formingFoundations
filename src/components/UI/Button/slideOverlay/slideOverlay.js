import React from 'react';
import PropTypes from 'prop-types';
import classes from './slideOverlay.module.scss';
import Button from '../Button/Button';

const slideOverlay = props => {
  return (
    <Button>
      {(isHover)=> (
        <React.Fragment>
          <span 
            style={{
              display: "inline-block",
              opacity: `${isHover ? 0 : 1}`,
              transition: "0.2s ease",
              transform: `${isHover ? "translate(-40px, 0)": "translate(0px, 0)"}`
            }}
          >
            {props.children}
          </span>
          <span
            style={{
              display: "block",
              position: "absolute",
              top: "-10%",
              left: "0px",
              width: "150%",
              height: "120%",
              opacity: `${isHover ? 1 : 0}`,
              transition: "0.3s ease",
              transform: `${isHover ? "translate(-10%, 0px) skew(-45deg)" : "translate(100%, 0)"}`,
              backgroundColor: `rgb(${props.rgb},${props.opacity})`
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
          >
            {props.children}
          </span>
        </React.Fragment>
      )}
    </Button>
  );
};

slideOverlay.propTypes = {
  children: PropTypes.element.isRequired,
  rgb: PropTypes.string,
  opacity: PropTypes.number
}

slideOverlay.defaultProps = {
  rgb: "10,10,10",
  opacity: 0.6
}

export default slideOverlay;