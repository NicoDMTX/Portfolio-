import React, {useState, useEffect} from 'react'
import './Navbar.css'
import Menu from '../assets/Home.png'
import { FaHome, FaArrowAltCircleLeft, FaEnvelope, FaUserGraduate } from 'react-icons/fa';

export default function Navbar() {

  const [checkWidth, setCheckWidth] = useState(window.innerWidth);
  const [toggleNav, setToggleNav] = useState(false)

  const toggleNavFunc = () => {
    setToggleNav(!toggleNav)
  }

  const checkFunc = () => {
    setCheckWidth(window.innerWidth)
  }

  useEffect(() => {
    window.addEventListener('resize', checkFunc)

    return () => {
      window.removeEventListener('resize', checkFunc)
    }

  }, [])

  return (
    <>
    {checkWidth < 900 && (
      <button onClick={toggleNavFunc} className="floating-btn">
        <FaHome className='home_icon' />
      </button>
    )}
     
      <nav className={toggleNav ? "active" : ""}>
      {checkWidth < 900 && (
        <button onClick={toggleNavFunc} className="close-nav">
          <FaArrowAltCircleLeft className='nav_arrow_icon'/>
        </button>
      )}
        <div className="tabs">
          <a href="#"><FaHome className='icons'/>Home</a>
          <a href="#"><FaUserGraduate className='icons'/>About</a>
          <a href="#"><FaEnvelope className='icons'/>Contact</a>
        </div>
  
      </nav>
    </>
  )
}
