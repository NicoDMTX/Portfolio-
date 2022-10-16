import React from 'react'
import styles from './Home.module.css'

export default function Home() {
  return (
    <div className={styles.home_container}>
        <h1 className={styles.title}>Nicolas Demontoux</h1>
        <h2 className={styles.title}>Développeur junior</h2>
    </div>
  )
}
