import React from 'react';
import "./Footer.scss"

const Footer = () => {
  return (
    <div className='footer'>
      <div className="top">
        <div className="item">
          <h1>Categories</h1>
          <span>Women</span>
          <span>Men</span>
          <span>Shoes</span>
          <span>Accessories</span>
          <span>New Arrivals</span>
        </div>

        <div className="item">
        <h1>Links</h1>
          <span>FAQ</span>
          <span>Pages</span>
          <span>Stores</span>
          <span>Compare</span>
          <span>Cookies</span>
        </div>

        <div className="item">
          <h1>About</h1>
          <span>
          The website doesn't have the theme I was going for.
          Something summery; colorful. This looks perfect. Just Photoshop out the dog, add a baby, and make the curtains blue. We also need to add this 2000 line essay. Can the black be darker? Can you make it stand out more? I know you've made thirty iterations, but can we go back to the first one? That was the best version I remember. I'll know it when I see it; thats not what I saw in my head at all. Can you put "find us on facebook" by the facebook logo?
          </span>
        </div>
        
        <div className="item">
        <h1>Contact</h1>
          <span>
          Normally,
          Both your asses would be dead as fucking fried chicken, but you happen to pull this shit while I'm in a transitional period so I don't wanna kill you, I wanna help you. But I can't give you this case, it don't belong to me. Besides, I've already been through too much shit this morning over this case to hand it over to your dumb ass.
          </span>
        </div>
      </div>

      <div className="bottom">
        <div className="left">
          <span className="logo">Alpaca Depot</span>
          <span className="copyright">
            Copyright 2023. All Rights Reserved
          </span>
        </div>
        <div className="right">
          <img src="/img/payment-choice.png" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Footer;