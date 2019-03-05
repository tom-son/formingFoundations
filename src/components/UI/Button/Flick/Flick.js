import React from 'react';
import PropTypes from 'prop-types';
import classes from './Flick.module.scss';

class Flick extends React.Component {

  constructor(props) {
    super(props);

    // this.hoverHandler = this.hoverHandler.bind(this);
    this.setIsHover = this.setIsHover.bind(this);
    this.mouseEnterHandler = this.mouseEnterHandler.bind(this);
    this.mouseLeaveHandler = this.mouseLeaveHandler.bind(this);

    this.buttonRef = React.createRef();

    this.state = {
      isHover: false
    }
  }

  componentDidMount() {
    this.buttonRef.current.addEventListener("mouseenter", this.mouseEnterHandler);
  }

  // componentWillUnmount() {
    // window.removeEventListener(this.mouseEnterHandler);
  // }

  mouseEnterHandler() {
    this.setIsHover(true, () => {
      this.buttonRef.current.removeEventListener("mouseenter", this.mouseEnterHandler);
      this.buttonRef.current.addEventListener("mouseleave", this.mouseLeaveHandler);
    });
  }

  mouseLeaveHandler() {
    this.setIsHover(false, ()=> {
      this.buttonRef.current.removeEventListener("mouseleave", this.mouseEnterHandler);
      this.buttonRef.current.addEventListener("mouseenter", this.mouseEnterHandler);
    });
  }

  setIsHover(isEnter, execAfter) {
    console.log("setIsHover: ", isEnter)
    this.setState({isHover: isEnter}, ()=> {
      if (typeof execAfter === "function" ) {
        execAfter();
      }
    });
  }


  render() {
    const { state, props } = this;
    return (
      <button
        ref={this.buttonRef}
        style={{
          position: "relative",
          padding: props.padding,
          overflow: "hidden",
          border: "none",
          backgroundColor: "inherit",
          fontSize: props.fontSize,
          fontWeight: 800,
          fontFamily: "Oswald",
          letterSpacing: "1px"
        }}
        onClick={props.onClick}
      >
        <span 
          className={`${classes.buttonText}`}
          style={{
            position: "relative",
            transform: `${state.isHover ? "translate(0, -20px)" : "translate(0, 0px)"}`,
            opacity: `${state.isHover ? 0 : 1}`,
            color: props.baseColor,
          }}
        >{props.children}</span>
        <span 
          className={`${classes.buttonText} ${classes.bottom}`}
          style={{
            position: "absolute",
            opacity: `${state.isHover ? 1 : 0}`,
            color: props.hoverColor,
            top: `${state.isHover ? "50%" : "90%"}`,
            left: "50%",
            transform: "translate(-50%, -50%)",
          }}>{props.children}</span>
      </button>
    );
  };
};

Flick.propTypes = {

}

Flick.defaultProps = {
  padding: "20px 40px",
  baseColor: "white",
  hoverColor: "#177CF9",
  fontSize: "1.2rem"
}

export default Flick;