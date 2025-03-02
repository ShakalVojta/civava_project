import React from 'react';
import hero from '../../../assets/hero-photo.jpg'
import '../../../../css/pages/Home/components/HeroSection.css'

const HeroSection = () => {
  return (
    <section className="hero-section">
      <div className="hero-content">
        <div className="hero-text">
          <h1>Osobní a profesní rozvoj</h1>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Non harum eveniet iste fugiat voluptas laborum error. Tenetur recusandae ex nobis sapiente nemo quam, nam repellat, optio saepe modi, nisi perferendis.</p>
          <button className="btn primary-btn">MŮJ PŘÍSTUP</button>
        </div>
        <div className="hero-image">
          <img src={hero} alt="Eva Klapačová" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;