import React from 'react';
import classes from './FlickButton.module.scss';

class FlickButton extends React.Component {

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
          // border: "1px solid black",
          padding: "20px 40px",
          // background: "#111517",
          overflow: "hidden",
          border: "none",
        }}
      >
        <span 
          className={`${classes.buttonText}`}
          style={{
            position: "relative",
            transform: `${state.isHover ? "translate(0, -20px)" : "translate(0, 0px)"}`,
            opacity: `${state.isHover ? 0 : 1}`,
            fontSize: "1rem",
            fontWeight: 800,
            color: "grey",
            letterSpacing: "1px"
            // transition: `${"0.1s ease-out"}`
          }}
        >{props.children}</span>
        <span 
          className={`${classes.buttonText} ${classes.bottom}`}
          style={{
            position: "absolute",
            // transform: `${state.isHover ? "translate(0, 0": "translate(0, 20px)"}`,
            opacity: `${state.isHover ? 1 : 0}`,
            fontSize: "1rem",
            fontWeight: 800,
            color: "#ef0d33",
            letterSpacing: "1px",
            top: `${state.isHover ? "50%" : "90%"}`,
            left: "50%",
            transform: "translate(-50%, -50%)"
            // transition: `${"0.1s ease-out"}`
          }}>{props.children}</span>
      </button>
    );
  };
};

export default FlickButton;