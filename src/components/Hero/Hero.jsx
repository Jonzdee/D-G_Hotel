
import React from 'react';

function Hero({ children, hero='defaultHero' }) {
  return (
    <section className={hero}>
      {children}
    </section>
  );
}



export default Hero;
