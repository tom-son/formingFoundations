import React from "react";
import classes from "./heroCover.module.scss";
import ScrollReveal from "../UI/ScrollReveal/ScrollReveal";

const heroCover = props => {
  return (
    <div
      style={{
        position: "relative",
        height: "100vh"
      }}
    >
      {props.background}
      <section className={classes.heroCover}>
        <ScrollReveal delay={1500}>
          {ref => (
            <React.Fragment>
              <h1 className={classes.heroCoverTitle} ref={ref}>{props.title}</h1>
              <div className={classes.line}/>
            </React.Fragment>
          )}
        </ScrollReveal>
        <ScrollReveal delay={2000}>
          {ref => <p className={classes.heroCoverSummary} ref={ref}>{props.summary}</p>}
        </ScrollReveal>
        {/* <ScrollReveal delay={2400}>
            {props.button}
        </ScrollReveal> */}
      </section>
    </div>
  );
};

export default heroCover;
