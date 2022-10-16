import React from 'react'
import styles from './Home.module.css'

export default function Home() {
  return (
    <>
    <div className={styles.big_container}>
      <div className={styles.bitmoji_container}>
          <img src="/public/home_bitmoji3.png" className={styles.home_bitmoji}></img>
      </div>

      <div className={styles.home_container}>
          <h1 className={styles.title}>Nicolas Demontoux</h1>
          <h2 className={styles.title}>Développeur junior</h2>
      </div>
    </div>
    <div className={styles.img_sizer}>
      <div className={styles.img_container}></div>
    </div>
    
    
    
    </>
    
  )
}
