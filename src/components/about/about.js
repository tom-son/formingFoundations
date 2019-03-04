import React from 'react';
import classes from './about.module.scss';
import DescriptionCard from './descriptionCard/descriptionCard';
import UIButtonSlideOverlay from '../UI/Button/slideOverlay/slideOverlay';

const about = props => {
  return (
    <div className={classes.aboutContainer}>
      <div 
        style={{
          backgroundImage: "url('https://www.strv.com/dist/2ca8ff1c10262dfdcd620e09ac39d337.jpg')",
          height: "100vh",
          width: "100%",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center center",
        }}
      >
        <div className={classes.heroContent}>
          <h1>
            SPECIALISTS IN <br/>DIGITAL SOLUTIONS
          </h1>
          line
          <p>Our designers and engineers know collaboration is the essence of any project. It’s a simple philosophy we’ve followed for nearly two decades. And it delivers results.</p>
        </div>

      </div>

      <section className={classes.ourValues}>
        <h1>OUR VALUES</h1>
        <p className={classes.ourValuesIntro}>At the heart of Forming Foundations, you’ll find one thing above all: bravery. A deep commitment not just to personal excellence, but to working with our team and clients to ensure everything we do is the best that it can be.</p>
        <DescriptionCard title="Commitment to excellence" number="01" >
          “Good enough” is never good enough for us. Every member of our team is here because of a passion to be the best at what we do.
        </DescriptionCard>
        <DescriptionCard title="Drive by innovation" number="02" >
          We are always on the lookout for technological advancements that streamline our work, and ensure top-quality for our partners.
        </DescriptionCard>
        <DescriptionCard title="Part of your team" number="03" >
          Our team is your team. Whether you have been building products for years, or new to the industry, we are teammates on your path to success.
        </DescriptionCard>
      </section>

      <section className={classes.whyUs}>
        <h1>WHY CHOOSE US</h1>
        <p className={classes.whyUsIntro}>Company culture is a huge deal for us. While our aim is to become the leading development company in the US, working with hottest companies and startups on the market today, we still want everybody to feel at home within our team — no matter how big we grow.</p>
        <DescriptionCard title="Absolute freedom" number="01" >
          You are your own manager and know what works best for you and your workflow. No hand holding here!
        </DescriptionCard>
        <DescriptionCard title="Projects that matter" number="02" >
          Constantly collaborate on some of the coolest and most promising projects on the tech and startup scene.
        </DescriptionCard>
        <DescriptionCard title="Learn from the best" number="03" >
          More than 10 years of experience and hundreds of projects since inception back us up on this one.
        </DescriptionCard>
      </section>

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

      
    </div>
  );
};

export default about;