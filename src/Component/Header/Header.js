import React, { useState } from 'react';
import { Link } from 'react-scroll';
import './Header.css';
import img from '../../Assert/Round Sticker_page-0001 1.svg';
import qrcode from '../../Assert/Frame 3.png';
import cow from '../../Assert/cow.png';
import hamburgerIcon from '../../Assert/burger-menu-right-svgrepo-com.svg'; // Add your hamburger icon here

const Header = () => {
  const [isSideNavOpen, setIsSideNavOpen] = useState(false);

  const toggleSideNav = () => {
    setIsSideNavOpen(!isSideNavOpen);
  };

  return (
    <>
      <header>
        <nav>
          <ul className="nav-links">
            <li><Link to="about-us" smooth={true} duration={500}>About Us</Link></li>
            <li><Link to="shop-now" smooth={true} duration={500}>Shop Now</Link></li>
            <li><Link to="products" smooth={true} duration={500}>Products</Link></li>
            <li><Link to="faq" smooth={true} duration={500}>FAQ</Link></li>
          </ul>
          <div>
            <img src={img} alt="Brand Logo" />
          </div>
          <div className='hamburger' onClick={toggleSideNav}>
            <img src={hamburgerIcon} alt="Menu" />
          </div>
        </nav>
        <h1>Experience the Purity of<br /> Authentic Ghee</h1>
        <img className='qrcode' src={qrcode} alt="QR Code" />
        <img className='qrcode' src={cow} alt="Cow" />
      </header>
      <section id='side_nav' className={isSideNavOpen ? 'open' : ''}>
        <ul>
          <li><Link to="about-us" smooth={true} duration={500} onClick={toggleSideNav}>About Us</Link></li>
          <li><Link to="shop-now" smooth={true} duration={500} onClick={toggleSideNav}>Shop Now</Link></li>
          <li><Link to="products" smooth={true} duration={500} onClick={toggleSideNav}>Products</Link></li>
          <li><Link to="faq" smooth={true} duration={500} onClick={toggleSideNav}>FAQ</Link></li>
        </ul>
      </section>
    </>
  );
};

export default Header;
