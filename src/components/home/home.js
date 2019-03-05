import React from "react";
import classes from "./home.module.scss";
import ScrollReveal from "../UI/ScrollReveal/ScrollReveal";
import UIButtonSlideOverlay from "../UI/Button/slideOverlay/slideOverlay";
// import HeroCover from './heroCover/heroCover';
import VideoBanner from "../UI/VideoBanner/VideoBanner";
import HeroCover from '../heroCover/heroCover';

const home = props => {
  return (
    <main>
      {/* <HeroCover /> */}
      <HeroCover 
        title="Boost marks and confidence"
        summary="We teach students from year 1 to 6. All subjects are taught in ten-week terms. Our quality tuition is great starting at $20! Look at our Results page."
        background={(
          <VideoBanner
            url="https://www.matrix.edu.au/wp-content/themes/matrix_2015/video/matrix-video-banner.mp4"
            rgb="10,10,10"
            opacity="0.8"
          />
        )}
      />
      <div className={classes.paragraphQuote}>
        <ScrollReveal>
          {/* <div>Icons made by <a href="https://www.freepik.com/" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a> is licensed by <a href="http://creativecommons.org/licenses/by/3.0/" title="Creative Commons BY 3.0">CC 3.0 BY</a></div> */}
          {ref => (
            <img ref={ref} style={{display: "block", width: "70px", borderRadius: "50%", margin: "0 auto"}} src={require("../../assets/images/girl.svg")} alt="Anonymous Girl"/>
          )}
        </ScrollReveal>
        <ScrollReveal delay={200}>
          {ref => (
            <p ref={ref}>
              “Forming Foundations provided me with an amazing learning
              experience in a great environment with an inspirational teacher who
              always want the best for you!”
            </p>
          )}
        </ScrollReveal>
        <ScrollReveal delay={400}>
          {ref=>(
            <span ref={ref} style={{fontSize: "0.87rem", fontFamily: "Lato", color: "grey", textTransform: "uppercase"}}>Kelly Lin at <span style={{color: "black"}}>St Johns Park Primary</span></span>
          )}
        </ScrollReveal>
      </div>
      <section
        style={{
          backgroundImage: "linear-gradient(45deg,#56cad5,#5493d4)",
        }}
        className={classes.homeCard}
      >
        <ScrollReveal>
          {ref => <h1 ref={ref}>Understand with clarity</h1>}
        </ScrollReveal>
        <ScrollReveal delay={200}>
          {ref => (
            <p ref={ref}>
              Weekly theory lessons help students gain extensive knowledge before
              it's taught at school. Inspirational teachers know how to explain
              things clearly, even the difficult stuff.{" "}
            </p>    
          )}
        </ScrollReveal>
        <ScrollReveal delay={400}>
          {ref => (
            <span
              ref={ref}
              className={classes.homeCardButton}
            >
              <UIButtonSlideOverlay rgb="255,255,255" opacity={1}>
                <span className={classes.buttonText}>LEARN MORE</span>
              </UIButtonSlideOverlay>
            </span>
          )}
        </ScrollReveal>
      </section>
      
      <ScrollReveal>
        {ref => (
          <section 
            ref={ref} 
            className={classes.overviewCard}
          >
            <div style={{width: "380px", margin: "0 auto"}}>
              <h1>MAKE LEARNING FUN</h1>
              <p className={classes.overviewCardInto}>
                We encourage students to learn at their own pace, in a relaxed and
                supportive environment to get ahead in life.
              </p>
              <h3>Experienced</h3>
              <div className={classes.overViewCardDash}/>
              <p>Your child will work with an experienced and dedicated tutor</p>
              <h3>Succeed</h3>
              <div className={classes.overViewCardDash}/>
              <p>
                We focus on the school syllabus and the skills and knowledge your
                child needs to succeed
              </p>
            </div>
          </section>
        )}
      </ScrollReveal>
      <section
        style={{
          backgroundColor: "#ff943b"
        }}
        className={classes.subjectCard}
      >
        <ScrollReveal>
          {ref => (
            <h1 ref={ref}>OUR SUBJECTS</h1>
          )}
        </ScrollReveal>
        <ScrollReveal delay={300}>
          {ref => (
            <p ref={ref}>
              We teach students from year 1 to HSC. All subjects are taught in
              ten-week terms. From $10 per hour, our quality tuition is great
              value! Look at our Results page.
            </p>
          )}
        </ScrollReveal>
        <ScrollReveal delay={600}>
          {ref => (
            <p ref={ref}>
               Mathematics Years 1 – 2 1 hr Years 3 – 5 1.5 hrs Years 6 – HSC 2
              hrs English Years 1 – 2 1 hr Years 3 – 5 1.5 hrs Years 6 – HSC 1.5
              hrs
            </p>
          )}
        </ScrollReveal>
        <ScrollReveal delay={900}>
          {ref => (
            <span
              ref={ref}
              className={classes.subjectsButton}
            >
              <UIButtonSlideOverlay rgb="255,255,255" opacity={1}>
                <span className={classes.subjectCardButtonText}>LEARN MORE</span>
              </UIButtonSlideOverlay>
            </span>
          )}
        </ScrollReveal>
      </section>
        

      <ScrollReveal>
        {ref => (
          <div ref={ref}>
            <p className={classes.paragraphQuote}>
              “STRV has exceeded my expectations from design to development, and
              I love how I can trust them with product strategy too.”
            </p>
          </div>
        )}
      </ScrollReveal>
      <div style={{display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", height: "50vh", backgroundColor: "#177CF9", opacity: "0.9", textAlign: "center"}}>
        <h1 style={{color: "white"}}>Get started with Forming Foundations</h1>
        <span
          className={classes.enquireButton}
        >
          <UIButtonSlideOverlay rgb="255,255,255" opacity={1}>
            <span className={classes.subjectCardButtonText}>ENQUIRE NOW</span>
          </UIButtonSlideOverlay>
        </span>
      </div>
    </main>
  );
};

export default home;
