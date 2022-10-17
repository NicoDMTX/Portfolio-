import React from 'react'
import styles from './Home.module.css'
import bitmoji from '../assets/home_bitmoji3.png'

export default function Home() {
  return (
    <>
    <div className={styles.big_container}>
      <div className={styles.bitmoji_container}>
          <img src={bitmoji} className={styles.home_bitmoji}></img>
      </div>

      <div className={styles.home_container}>
          <h1 className={styles.title}>Nicolas Demontoux</h1>
          <h2 className={styles.title}>Développeur junior</h2>
      </div>
    </div>

    <div className={styles.btn_container}>
      <div className={styles.btn}>Découvrir </div>
    </div>

    <div className={styles.img_sizer}>
      <div className={styles.img_container}></div>
    </div>
    </>
    
  )
}
