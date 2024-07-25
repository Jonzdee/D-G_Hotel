import React from 'react'
import RoomDetails from '../components/roomdetails/RoomDetails'
import Hero from '../components/Hero/Hero';
import Banner from '../components/banner/Banner';
import { Link } from 'react-router-dom';
import ScrollToTop from '../components/Hero/ScrollToTop';

function RoomsDetailPage() {
  return (
   <>
   <ScrollToTop />
   <Hero hero='roomsHero'>
        <Banner hero='roomsHero'>
          <Link to='/' className='btn-primary'>
          Return Home
          </Link>
        </Banner>
      </Hero>

      <RoomDetails />
   </>
  )
}

export default RoomsDetailPage