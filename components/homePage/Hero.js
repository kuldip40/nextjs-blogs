import React from "react";
import classes from "./Hero.module.css";
import Image from "next/image";

const Hero = () => {
  return (
    <section className={classes.hero}>
      <div className={classes.image}>
        <Image
          src="/images/site/person.png"
          alt="An image showing Kuldip"
          width={300}
          height={300}
        />
      </div>
      <h1>Hi, I'm Kuldip</h1>
      <p>
        I blog about web development - especially frontend frameworks like
        Angular or React.
      </p>
    </section>
  );
};

export default Hero;
