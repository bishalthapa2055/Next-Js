import React from 'react'
import styles from "@/styles/Banner.module.css"
import Image from 'next/image'
const Banner = () => {
  return (
    <div className='container'>
      
      <div className={styles.banner__container}>
        <div className={styles.banner__subcontainer}>
          <h1 className={styles.banner__title}>Coffee 
            <span className={styles.banner__span}>
            Conneisser
            </span>
          </h1>
          <h2 className={styles.banner__subtitle}>
              View All the necessay cointents !!!
          </h2>
          <div className={styles.banner__button__container}>
          <button className={styles.banner__button}>View NearBy Store</button>
          </div>
        </div>
        <div className={styles.banner__image__container}>
          <Image src="/static/hero_image.png"width={400} height={500} className={styles.banner__image}/>
        </div>
        </div>
    </div>
  )
}

export default Banner