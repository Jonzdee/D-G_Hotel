import React from 'react'
import favicon from '../../images/favicon.png'
import { FaAlignRight } from 'react-icons/fa'
import { Link } from 'react-router-dom';
import { useState } from 'react'

function Navbar() {
    //change nav color when scrolling
    const [color, setColor] = useState(false);
    const changeColor = () =>{
        if(window.scrollY >= 95) {
            setColor(true)
        } else{
            setColor(false)
        }
    }

    window.addEventListener('scroll', changeColor)
    const [isOpen, setIsOpen] = useState(false);
    const handleToggle = () => {
        setIsOpen(!isOpen);
      };
    return (
       
         <nav className={color ? 'navbar bg-nav text-black' : 'navbar text-white'}>
            <div className='nav-center'>
                <div className='nav-header'>
                    <Link to='/' >
                    <img src={favicon} alt="logo" 
                    className="w-12 h-12 sm:w-12 sm:h-12 lg:w-12 lg:h-12 mx-auto sm:mx-0"
                data-aos="fade-up"
                    />
                    </Link>
                    <button type='button' className='nav-btn' onClick={handleToggle}>
                        <FaAlignRight className='nav-icon'/>
                    </button>
                </div>
                <ul className={isOpen ? "nav-links show-nav" : "nav-links" }>
                <li>
                    <Link to='/'>Home</Link>
                </li>
                <li>
                    <Link  to='/rooms' >Rooms</Link>
                </li>
                <li>
                    <Link to='/restaurant'>Restaurant</Link>
                </li>
                <li >
                    <Link to='/gallary'>Gallery</Link>
                </li>
                <li>
                    <Link to='/aboutus'>About</Link>
                </li>
                <li>
                    <Link to='/contact'>Contact </Link>
                </li>
                <li>
                    <Link to='/MeetingPage'>Meetings </Link>
                </li>
                </ul>
            </div>
        </nav>
       
    )
}

export default Navbar