import React from 'react'
import logo from '../../images/logo.svg'
import { FaAlignRight } from 'react-icons/fa'
import { Link } from 'react-router-dom';
import { useState } from 'react'

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const handleToggle = () => {
        setIsOpen(!isOpen);
      };
    return (
       
         <nav className='navbar'>
            <div className='nav-center'>
                <div className='nav-header'>
                    <Link to='/'>
                    <h2 className="text-2xl ">D&G Hotel</h2>
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
                    <Link to='/rooms'>Rooms</Link>
                </li>
                <li>
                    <Link to='/restaurant'>Restaurant</Link>
                </li>
                <li>
                    <Link to='/gallary'>Gallary</Link>
                </li>
                <li>
                    <Link to='/rooms'>About</Link>
                </li>
                <li>
                    <Link to='/contact'>Contact </Link>
                </li>
                </ul>
            </div>
        </nav>
       
    )
}

export default Navbar