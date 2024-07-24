import React from 'react'
import Hero from '../components/Hero/Hero';
import Banner from '../components/banner/Banner';
import { Link } from 'react-router-dom';
// imports components
import Services from "../components/services/Service";
// import FeactureRoom from "../components/FeacturedRoom/FeactureRoom";
import About from '../components/about/About';
import Gallery from '../components/gallary/Gallary';
import FetchData from '../FetchData';
import About1 from '../components/about/About1';
import ServiceCarousel from '../components/services/ServiceCarousel';




function Home() {
  return (
    <>
      <Hero>
        <Banner
          title='Your Luxury Hotel For Vacation'
          subtitle='Just Enjoy Relax '>
          <Link to='/rooms' className='btn-primary text-white'>
            Our Rooms</Link>
        </Banner>
      </Hero>
      <About />
      <About1 />

      <FetchData />
      <ServiceCarousel />
      <Services />
      <Gallery />

    </>
  )
}

export default Home