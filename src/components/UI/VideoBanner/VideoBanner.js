import React from 'react';
import PropTypes from 'prop-types';
import classes from './VideoBanner.module.scss';

class VideoBanner extends React.Component {
  render() {
    const { props } = this;
    return (
      <div className={classes.videoContainer}>
        <video autoPlay muted loop className={classes.video}>
          <source src={props.url} type="video/mp4" />
        </video>
        <div 
          style={{
            backgroundColor: `rgba(${props.rgb},${props.opacity})`,
          }}
          className={classes.videoOverlay}>

        </div>
      </div>
    );
  };
};

VideoBanner.propTypes = {
  url: PropTypes.string.isRequired
}

VideoBanner.defaultProps = {
  rgb: "10,10,10",
  opacity: "0.4"
}

export default VideoBanner;