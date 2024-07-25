import React, { Component, useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Gallary from '../components/gallary/Gallary'
import Hero from '../components/Hero/Hero';
import Banner from '../components/banner/Banner';
import { Link } from'react-router-dom';

// Component import
import Request from "../components/Meeting/MeetingRequest";
import About from "../components/Meeting/MeetinAbout";
import Why from "../components/Meeting/MeetingWhyChoseUs";
import CarList from "../components/Meeting/MeetingList";
import Contact from "../components/Meeting/MeetingContact";
import Testimonial from "../components/Meeting/MeetingTestimonial";
import ScrollToTop from "../components/Hero/ScrollToTop";
// import Footer from "../components/Meeting/MeetingFooter";

const MeetingPage = () => {
  // Dark mode state and effect
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") ? localStorage.getItem("theme") : "light"
  );
  const element = document.documentElement;

  useEffect(() => {
    if (theme === "dark") {
      element.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      element.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [theme]);

  // AOS initialization
  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 800,
      easing: "ease-in-sine",
      delay: 100,
    });
    AOS.refresh();
  }, []);

  return (
    <div className="bg-white dark:bg-black dark:text-white text-black overflow-x-hidden">
      <ScrollToTop />
<Hero hero='roomsHero'>
        <Banner hero='roomsHero'>
          <Link to='/' className='btn-primary'>
          Return Home
          </Link>
        </Banner>
      </Hero>
      <Request theme={theme} />
      <About />
      <Why />
      <CarList />
      <Testimonial />
      <Contact />
      {/* <Footer /> */}
    </div>
  );
};

export default MeetingPage;