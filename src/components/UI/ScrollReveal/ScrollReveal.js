import React from "react";
import { Transition } from "react-transition-group";
import PropTypes from "prop-types";

class ScrollAnimation extends React.Component {
  constructor(props) {
    super(props);

    this.setIsReveal = this.setIsReveal.bind(this);
    this.scrollEventHandler = this.scrollEventHandler.bind(this);
    this.scrollTail = this.scrollTail.bind(this);

    this.ref = React.createRef();

    this.throttleInterval = 0;
    this.lastScrollTime = 0;

    this.state = {
      isReveal: false
    };
  }

  componentDidMount() {
    document.addEventListener("scroll", this.scrollEventHandler);
  }

  componentWillUnmount() {
    this.removeScrollListener();
  }

  scrollEventHandler() {
    const now = Date.now();
    // if condition for throttling purposes
    if (this.lastScrollTime + this.throttleInterval < now) {
      if (this.getIsReveal()) {
        setTimeout(() => {
        this.setIsReveal(true);

        }, this.props.delay);
      } else {
        clearTimeout(this.isSetTimeout);
        this.isSetTimeout = setTimeout(this.scrollTail, this.throttleInterval);
        this.lastScrollTime = now;
      }
    }
  }

  scrollTail() {
    console.log("scrollTail");
    if (!this.state.isReveal && this.getIsReveal()) {
      setTimeout(() => {
        this.setIsReveal(true);
        // this.removeScrollListener();
      }, this.props.delay);
    }
  }

  removeScrollListener() {
    document.removeEventListener("scroll", this.scrollEventHandler);
    console.log("Scroll event listener removed");
  }

  setIsReveal = isReveal => {
    this.setState({ isReveal: isReveal }, () => {
      if (isReveal) {
        this.removeScrollListener();
      }
    });
  };

  getIsReveal() {
    const revealPosY = window.innerHeight * this.props.revealThreshold;
    return this.ref.current.getBoundingClientRect().top < revealPosY;
  }

  render() {
    const defaultStyle = {
      opacity: 0
    };

    const transitionStyles = {
      entering: {
        opacity: 0,
        transform: "translateY(125px)"
      },
      entered: {
        opacity: 1,
        transform: "translateY(0px)",
        transition: `opacity ${this.props.duration}ms, transform ${
          this.props.duration
        }ms ease-out`
      }
    };

    return (
      <Transition in={this.state.isReveal} timeout={{enter: 0, entering: this.props.duration}}>
        {transitionState => (
          <div
            style={{
              ...defaultStyle,
              ...transitionStyles[transitionState]
            }}
          >
            {this.props.children(this.ref)}
          </div>
        )}
      </Transition>
    );
  }
}

ScrollAnimation.propTypes = {
  duration: PropTypes.number,
  revealThreshold: PropTypes.number,
  delay: PropTypes.number
};

ScrollAnimation.defaultProps = {
  duration: 900, // duration in milliseconds
  revealThreshold: 0.90, // reveal position relative to top of viewport. 1 = 100% viewport height.
  delay: 0
};

export default ScrollAnimation;
