import React, { Component, useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

// Component import
import Hero from "../components/Meeting/MeetingHero";
import About from "../components/Meeting/MeetinAbout";
import Services from "../components/Meeting/MeetingServices";
import CarList from "../components/Meeting/MeetingList";
import AppStoreBanner from "../components/Meeting/MeetingAppStoreBanner";
import Contact from "../components/Meeting/MeetingContact";
import Testimonial from "../components/Meeting/MeetingTestimonial";
import Footer from "../components/Meeting/MeetingFooter";

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
      <Hero theme={theme} />
      <About />
      <Services />
      <CarList />
      <Testimonial />
      <AppStoreBanner />
      <Contact />
      <Footer />
    </div>
  );
};

export default MeetingPage;