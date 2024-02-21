import React from "react";
import './Footer.css'
import FooterLogo from '../assets/dummy logo01 3.png'
import insta from '../assets/insta.png'
import linkedin from '../assets/linkedin.png'
const Footer = () => {
  return (
    <div>
      <footer>
        <div className="footer-left">
          <div className="footer-left-top">
            <div className="footer-logo-left">
                <img src={FooterLogo} alt="" />
            </div>
            <div className="footer-left-para">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Omnis
              nostrum praesentium dolores fugit voluptatem incidunt natus,
              architecto aspernatur asperiores vero?
            </div>
          </div>
          <div className="footer-left-bottom">
            <div className="footer-left-bottom-para">Lorem ipsum dolor sit amet consectetur adipisicing.</div>
            <div className="footer-form-container">
                <input type="text" placeholder="Lorem Ipsum"/>
                <button className="footer-left-bottom">Lorem Ipsum</button>
            </div>
          </div>
        </div>
        <div className="footer-right">
            <p className="phno">967**598**</p>
            <p className="gmail">*****@gmail.com</p>
            <div className="social">
                <div className="insta">
                    <img src={insta} alt="" />
                </div>
                <div className="linkedin">
                    <img src={linkedin} alt="" />
                </div>
            </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
