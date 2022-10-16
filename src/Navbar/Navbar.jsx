import React, {useState, useEffect} from 'react'
import styles from './Navbar.module.css'
import { Link } from "react-router-dom"

import { FaHome, FaArrowAltCircleLeft, FaEnvelope, FaUserGraduate, FaTwitter, FaLinkedin, FaGithub, FaDiscord } from 'react-icons/fa';

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
          <Link className={styles.a} to="/" ><FaHome className={styles.icons}/>Accueil</Link>
          <Link className={styles.a} to="/about"><FaUserGraduate className={styles.icons}/>À propos</Link>
          <Link className={styles.a} to="/contact"><FaEnvelope className={styles.icons}/>Contact</Link>
        </div>

        <div className={styles.social_network}>
          <a href="https://twitter.com/n_demontoux" className={styles.twitter_logo} target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
          <a href="https://twitter.com/n_demontoux" className={styles.twitter_logo} target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
          <a href="https://twitter.com/n_demontoux" className={styles.twitter_logo} target="_blank" rel="noopener noreferrer"><FaGithub /></a>
          <a href="https://twitter.com/n_demontoux" className={styles.twitter_logo} target="_blank" rel="noopener noreferrer"><FaDiscord /></a>
        </div>

        <div className="langages">
        </div>
  
      </nav>
    </>
  )
}
