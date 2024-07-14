import React from 'react'
import { Link } from 'react-router-dom'
// imports components
import Hero from '../components/Hero/Hero'
import Banner from '../components/banner/Banner'
import RoomContainer from '../components/RoomsContainer/RoomsContainer'


function Rooms() {
  return (
    <>
      <Hero hero='roomsHero'>
        <Banner hero='roomsHero'>
          <Link to='/' className='btn-primary'>
          Return Home
          </Link>
        </Banner>
      </Hero>
      
      <RoomContainer />
    </>
  )
}

export default Rooms