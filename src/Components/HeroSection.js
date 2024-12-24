import React from 'react';
import heroImage from './Hero.png';

const HeroSection = () => {
  return (
    <section className="hero" style={{ backgroundImage: `url(${heroImage})` }}>
      <div className="hero-content">
        <h2 className="hero-title">Успех. Надежность. Металл.</h2>
        <p className="hero-description">Качественные материалы и отличное обслуживание</p>
        <button className="hero-button">Узнать больше</button>
      </div>
    </section>
  );
};

export default HeroSection;