import React from "react";

import styles from "../css/Hero.module.css";
import Social from "./Social";

const Hero = ({ hero, social }) => {
  return (
    <section id="hero" className={styles.hero}>
      <div className={styles.leftPanel}>
        <h1 className={styles.heading}>{hero.heading}</h1>
        <div className={styles.message}>{hero.message}</div>
        <div className={styles.socialMedia}>
          <Social social={social} />
        </div>
        {/* <div></div> */}
      </div>
      <div>
        <img className={styles.mainImage} src={hero.image} alt="" />
      </div>
    </section>
  );
};

export default Hero;
