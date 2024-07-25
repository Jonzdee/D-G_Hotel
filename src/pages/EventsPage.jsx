import React from 'react'
import Gallary from '../components/gallary/Gallary'
import Hero from '../components/Hero/Hero';
import Banner from '../components/banner/Banner';
import { Link } from'react-router-dom';
import ScrollToTop from '../components/Hero/ScrollToTop';

function GallaryPage() {
  return (
    <div>
      <ScrollToTop />
        <Hero hero='roomsHero'>
        <Banner hero='roomsHero'>
          <Link to='/' className='btn-primary'>
          Return Home
          </Link>
        </Banner>
      </Hero>
        <Gallary />
    </div>
  )
}

export default GallaryPage