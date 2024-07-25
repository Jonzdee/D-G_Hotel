import React from 'react';
import {motion} from 'framer-motion';

function Banner({children, title, subtitle}) {
  return (
    <div className='banner'>
       <motion.h1 data-aos="zoom-out-down">{title}</motion.h1>
        <div></div>
        <motion.p 
      data-aos="zoom-in-left"
       > {subtitle}</motion.p>
        {children}
    </div>
  )
}

export default Banner