import React from 'react';

class Button extends React.Component {

  constructor(props) {
    super(props);

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
          padding: "20px 40px",
          overflow: "hidden",
          border: "none",
          backgroundColor: "inherit",
          width: "100%",
          height: "100%",
        }}
      >
        {props.children(state.isHover)}
      </button>
    );
  };
};

export default Button;