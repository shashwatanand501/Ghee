import React from 'react';
import './AboutUs.css';
import star from '../../Assert/Star.svg';
import face from '../../Assert/team-fill.svg';
import leaf from '../../Assert/bxs-leaf 1.svg';
import PhoneImage from '../../Assert/mockup.png';

const openWhatsApp = () => {
  const phoneNumber = '9810314220'; // WhatsApp number in international format without '+' or spaces
  const message = encodeURIComponent('Hello, I am interested in your product.');
  const url = `https://wa.me/${phoneNumber}?text=${message}`;
  window.open(url, '_blank');
};

const AboutUs = () => {
  return (
    <section id="about-us">
      <div className='aboutUs'>
        <div className='logo-text'>
          <img src={star} alt="Satisfaction Star" />
          <p>100%<br />Satisfaction</p>
        </div>
        <div className='logo-text'>
          <img src={face} alt="Happy Customers" />
          <p>2000+<br />Happy Customers</p>
        </div>
        <div className='logo-text'>
          <img src={leaf} alt="Pure and Natural" />
          <p>Pure<br />and Natural</p>
        </div>
      </div>
      <div className='about_us_article'>
        <div className='article'>
          {/* <h2>Discover the Essence of Tradition in Every Jar</h2> */}
          <p>Our journey began with the pursuit of the perfect ghee, made using traditional methods. We are a brand known for its purity and quality.
            From the outset, we have focused on using the finest locally-sourced ingredients and time-honored techniques to create ghee that is rich in flavor and nutrients. Our commitment to excellence has earned  us the trust of many customers.</p>
          <button className='primary-btn' onClick={openWhatsApp}>Shop Now</button>
        </div>
        <div className='phone'>
          <img className='phoneImage' src={PhoneImage} alt="Phone" />
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
