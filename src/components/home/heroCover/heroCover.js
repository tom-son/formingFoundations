import React from "react";
import classes from "./heroCover.module.scss";
import VideoBanner from "../../UI/VideoBanner/VideoBanner";
import ScrollReveal from "../../UI/ScrollReveal/ScrollReveal";
import UIButtonSlideOverlay from '../../UI/Button/slideOverlay/slideOverlay';

const heroCover = props => {
  return (
    <div
      style={{
        position: "relative",
        height: "100vh"
      }}
    >
      <VideoBanner
        url="https://www.matrix.edu.au/wp-content/themes/matrix_2015/video/matrix-video-banner.mp4"
        rgb="10,10,10"
        opacity="0.8"
      />
      <section className={classes.heroCover}>
        <ScrollReveal delay={1500}>
          {ref => (
            <h1 ref={ref}>Boost marks and confidence</h1>
          )}
        </ScrollReveal>
        <div style={{
          width: "30px",
          height: "2px",
          margin: "30px auto",
          backgroundColor: "rgb(21, 126, 138)"
          }}
        />
        <ScrollReveal delay={2000}>
          {ref => (
            <p ref={ref}>
              We teach students from year 1 to 6. All subjects are taught in
              ten-week terms. Our quality tuition is great starting at $20! Look at our Results page.
            </p>
          )}
        </ScrollReveal>
        <ScrollReveal delay={2400}>
          {ref => (
            <span className={classes.heroCoverButton} style={{display: "inline-block", backgroundColor: "rgb(86, 202, 213)", borderRadius: "4px"}}>
              <UIButtonSlideOverlay
                rgb="47, 117, 150"
                opacity={1}
              >
                <span ref={ref}>ENQUIRE NOW</span>
              </UIButtonSlideOverlay>
            </span>
          )}
        </ScrollReveal>
      </section>
    </div>
  );
};

export default heroCover;
