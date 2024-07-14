import React from 'react'
import {  Routes, Route } from "react-router-dom";
import Home from './pages/Home'
import Rooms from './pages/Rooms'
import SingleRoom from './pages/SingleRoom';
import ContactPage from './pages/ContactPage';

import './App.css';

import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer'
import GallaryPage from './pages/GallaryPage';
import RestaurantPage from './pages/RestaurantPage'

import Login from './pages/auth/login';




function App() {


  return (
    <>
    <Navbar />
       
        <Routes>
          <Route path="/" element={<Home />} /> 
          <Route path="/rooms" element={<Rooms />} />
          <Route path="/gallary" element={<GallaryPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/restaurant" element={<RestaurantPage />} />
          <Route path="/single-room" element={<SingleRoom />} />
          <Route path="/rooms/:slug" element={<SingleRoom />} />
          <Route path="/pages/auth/login" element={<Login />} />
        </Routes>
       <Footer />
    </>
  )
}

export default App
