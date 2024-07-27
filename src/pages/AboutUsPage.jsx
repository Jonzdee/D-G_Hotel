import React from 'react'
import { Link } from'react-router-dom'
// component
import AboutUs from '../components/aboutUs/AboutUs'
import Hero from '../components/Hero/Hero';
import Banner from '../components/banner/Banner';
import ScrollToTop from '../components/Hero/ScrollToTop';

function AboutUsPage() {
  return (
    <div>
      <ScrollToTop />
      <Hero hero='roomsHero'>
        <Banner hero='roomsHero'>
          <Link to='/' className='btn-primary'>
          About Us
          </Link>
        </Banner>
      </Hero>
      <AboutUs />
    </div>
  )
}

export default AboutUsPage