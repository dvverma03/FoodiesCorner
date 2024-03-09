import React from "react";
import "./about.css";
import AboutImg from "/src/assets/backgrounds/aboutpage.png"
import Header from "../header";

const About = () => {
  return (
    <>
    <Header/>
    <div className="about-page">
      <div className="aboutPage">
        <img src={AboutImg} alt="" className="aboutpageImg" />
      </div>
      <h2 className="AbouDesc">About Our Food Delivery App</h2>
      <p>
        Welcome to our food delivery app! We strive to bring delicious meals
        from various restaurants right to your doorstep. Our goal is to provide
        a convenient and delightful experience for our users.
      </p>
      <h3>Features</h3>
      <ul>
        <li>Explore a wide range of cuisines</li>
        <li>Place orders easily and securely</li>
        <li>Track your orders in real-time</li>
        <li>Easy payment options</li>
        <li>And much more!</li>
      </ul>
      <h3>Our Team</h3>
      <p>
        Our team is passionate about food and technology. We work hard to ensure
        that you have the best experience using our app. Feel free to reach out
        to us if you have any questions or feedback!
      </p>
      <p>
        Contact us at:{" "}
        <a href="mailto:info@Salmanderfooddeliveryapp.com">
          info@fooddeliveryapp.com
        </a>
      </p>
    </div>
    </>
  );
};

export default About;
