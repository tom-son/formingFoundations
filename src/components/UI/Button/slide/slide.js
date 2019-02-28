import React from 'react';
import classes from './slide.module.scss';
import { Transition } from 'react-transition-group';
import Button from '../Button/Button';

const slide = props => {
  const transitionStyles = {
    entering: { 
      width: "0%",
    },
    entered: {
      transition: "0.5s ease",
      width: "100%",
    },
    exiting: {
      transition: "0.5s ease",
      bottom: "-2px",
      right: "0px",
      width: "0%"
    },
    exited: {
      transition: "0.5s ease",
    }
  }

  const textTransitionStyle = {
    entered: {
      color: "red"
    },
    exiting: {}
  };

  return (
    <Button>
      {(isHover)=>(
        <Transition
          in={isHover}
          timeout={{
            enter: 0,
            // enter: 500,
            exit: 500,
          }}
        >
          {(status)=>(
            <React.Fragment>
              <span className={`${classes.textBase}`}>
                {props.children}
                <span 
                  style={{
                    display: "block",
                    position: "absolute",
                    width: "0%",
                    height: "2px",
                    backgroundColor: "red",
                    ...transitionStyles[status]
                  }}
                ></span>
              </span>
            </React.Fragment>
          )}
        </Transition>
      )}
    </Button>
  );
};

export default slide;