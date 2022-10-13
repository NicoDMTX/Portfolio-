import React, {useState, useEffect} from 'react'
import styles from './Navbar.module.css'

import { FaHome, FaArrowAltCircleLeft, FaEnvelope, FaUserGraduate } from 'react-icons/fa';
import { GiFrance } from 'react-icons/gi';

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
      <button onClick={toggleNavFunc} className={styles.floating_btn}>
        <FaHome className={styles.home_icon} />
      </button>
    )}
     
      <nav className={toggleNav ? styles.active : ''}>
      {checkWidth < 900 && (
        <button onClick={toggleNavFunc} className={styles.close_nav}>
          <FaArrowAltCircleLeft className={styles.nav_arrow_icon}/>
        </button>
      )}
        <div className={styles.tabs}>
          <a href="/"><FaHome className={styles.icons}/>Home</a>
          <a href="/about"><FaUserGraduate className={styles.icons}/>About</a>
          <a href="/contact"><FaEnvelope className={styles.icons}/>Contact</a>
        </div>

        <div className="langages">
          <button className={styles.fr}><GiFrance className={styles.logo}/></button>
          <button className={styles.en}></button>
        </div>
  
      </nav>
    </>
  )
}
