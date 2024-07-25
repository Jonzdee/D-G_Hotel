import React from 'react';
import Restaurant from '../components/restaurant/Restaurant';
import Hero from '../components/Hero/Hero';
import Banner from '../components/banner/Banner';
import { Link } from 'react-router-dom';
import ScrollToTop from '../components/Hero/ScrollToTop';

function RestaurantPage() {
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

      <Restaurant />
    </div>
  )
}

export default RestaurantPage