import React from 'react';
import {motion} from 'framer-motion';

function Banner({children, title, subtitle}) {
  return (
    <div className='banner'>
       <motion.h1
       initial={{y: -1000}}
       animate={{y: 0}}
       transition={{
        duration: 1,
        delay: 0
       }}
       
       >{title}</motion.h1>
        <div></div>
        <motion.p 
       initial={{x: -1000}}
       animate={{x: 0}}
       transition={{
        duration: 1,
        delay: 0
       }}
       > {subtitle}</motion.p>
        {children}
    </div>
  )
}

export default Banner