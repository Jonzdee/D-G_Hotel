import React from 'react'
import Gallary from '../components/gallary/Gallary'
import Hero from '../components/Hero/Hero';
import Banner from '../components/banner/Banner';
import { Link } from'react-router-dom';

function GallaryPage() {
  return (
    <div>
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