import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home'
import Rooms from './pages/Rooms'
import SingleRoom from './pages/SingleRoom';
import ContactPage from './pages/ContactPage';

import './App.css';

import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer'

import RestaurantPage from './pages/RestaurantPage'
import EventsPage from './pages/EventsPage'


import FetchData from './FetchData';
import RoomDetails from './components/roomdetails/RoomDetails'




function App() {


  return (
    <>
    <Navbar />
       
        <Routes>
          <Route path="/" element={<Home />} /> 
          <Route path="/rooms" element={<Rooms />} />
          <Route path="/gallary" element={<EventsPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/restaurant" element={<RestaurantPage />} />
          <Route path="/single-room" element={<SingleRoom />} />
          <Route path="/rooms/:slug" element={<SingleRoom />} />
          

          <Route path="/" element={<FetchData />} />
        <Route path="/rooms/:id" element={<RoomDetails />} />

         
        </Routes>
        
       <Footer />
    </>
  )
}

export default App
