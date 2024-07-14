import React from 'react'
import Hero from '../components/Hero/Hero';
import Banner from '../components/banner/Banner';
import { Link } from 'react-router-dom';
// imports components
import Services from "../components/services/Service";
import FeactureRoom from "../components/FeacturedRoom/FeactureRoom";

function Home() {
  return  (
   <>
    <Hero> 
    <Banner 
    title='Your Luxury Hotel For Vacation' 
    subtitle='Just Enjoy Relax '> 
      <Link to='/rooms' className='btn-primary'>
      Our Rooms</Link>
      </Banner>
  </Hero>
  <Services />
  <FeactureRoom />
   </>
  )
}

export default Home