import React from 'react'
import Rooms from '../components/roomdetails/Rooms';
import Hero from '../components/Hero/Hero';
import Banner from '../components/banner/Banner';
import { Link } from 'react-router-dom'
import ScrollToTop from '../components/Hero/ScrollToTop';
function RoomsPage() {
    return (
        <div>
            <ScrollToTop />
            <Hero hero='roomsHero'>
                <Banner hero='roomsHero'>
                    <Link to='/' className='btn-primary'>
                        Our Rooms
                    </Link>
                </Banner>
            </Hero>
            <Rooms />
        </div>
    )
}

export default RoomsPage