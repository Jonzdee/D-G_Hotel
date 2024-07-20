import React from 'react'
import Hero from '../components/Hero/Hero';
import Banner from '../components/banner/Banner';
import { Link } from'react-router-dom';

function EventsPage() {
  return (
    <div>
        <Hero hero='roomsHero'>
        <Banner hero='roomsHero'>
          <Link to='/' className='btn-primary'>
          Return Home
          </Link>
        </Banner>
      </Hero>

      
    </div>
  )
}

export default EventsPage