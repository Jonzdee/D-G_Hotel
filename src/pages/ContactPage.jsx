import React from 'react'
import { Link } from'react-router-dom'
// component
import Contact from '../components/contact/Contact'
import Hero from '../components/Hero/Hero';
import Banner from '../components/banner/Banner';

function ContactPage() {
  return (
    <div>
      <Hero hero='roomsHero'>
        <Banner hero='roomsHero'>
          <Link to='/' className='btn-primary'>
          Return Home
          </Link>
        </Banner>
      </Hero>
      <Contact />
    </div>
  )
}

export default ContactPage