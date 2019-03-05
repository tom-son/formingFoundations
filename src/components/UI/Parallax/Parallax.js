import React from "react";
import PropTypes from 'prop-types';
import classes from "./Parallax.module.scss";

class Parallax extends React.Component {
  constructor(props) {
    super(props);

    this.backgroundScrollHandler = this.backgroundScrollHandler.bind(this);
    this.scrollAnimationFrame = this.scrollAnimationFrame.bind(this);

    this.backgroundRef = React.createRef();
    this.containerRef = React.createRef();
  }

  componentDidMount() {
    window.addEventListener("scroll", this.scrollAnimationFrame);
    window.addEventListener("resize", this.scrollAnimationFrame);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.scrollAnimationFrame)
    window.removeEventListener("resize", this.scrollAnimationFrame)
  }

  scrollAnimationFrame() {
    window.requestAnimationFrame(this.backgroundScrollHandler);
  }

  backgroundScrollHandler() {
    const { scrollY, innerHeight } = window;
    const inViewBottom = scrollY + innerHeight;
    const containerRect = this.containerRef.current;
    // console.log(inViewBottom, containerRect.offsetTop);
    // console.log(scrollY, containerRect.offsetHeight);
    if (
      inViewBottom > containerRect.offsetTop &&
      scrollY < containerRect.offsetTop + containerRect.offsetHeight
    ) {
      const backgroundRect = this.backgroundRef.current;
      // console.log(
      //   "In viewport:",
      //   (inViewBottom - containerRect.offsetTop) * 0.15 - (backgroundRect.offsetHeight / 2)
      // );
      // console.log(((inViewBottom - containerRect.offsetTop) * 0.15)/ 4)
      this.backgroundRef.current.style.transform = `translate3d(0px, ${(inViewBottom -
        containerRect.offsetTop) *
        0.15 -
        (backgroundRect.offsetHeight / 5)}px, 0px)`;
    }
  }

  render() {
    const { props } = this;
    return (
      <div 
        ref={this.containerRef}
        className={classes.parallax}
      >
        <img
          ref={this.backgroundRef}
          className={classes.background}
          src={props.src}
          alt="background"
        />
        <div className={classes.foreground}>{props.children}</div>
      </div>
    );
  }
}

Parallax.propTypes = {
  src: PropTypes.string.isRequired,
  children: PropTypes.element,
}

export default Parallax;
