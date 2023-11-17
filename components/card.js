import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import styles from './card.module.css';
// import data from "../data/coffee-store.json"




const Card = ({data}) => {
    console.log(data.data)
  return (

    <>
        <div className='container'>
        <h2 className={styles.card__header__title}>Toronto Stores</h2>

            <div className={styles.grid__container} >

            {data.data.map((item) =>{
                return (
                    
                    <>
                    <Link href={`coffee-store/${item.id}`} key={item.id}>

                    <div className={styles.card__container}>
                <div className={styles.card__header}>
                    <h2>{item.name}</h2>
                </div>
                <div className={styles.card__image__container}>
                    <Image src="/static/hero_image.png" width={260} height={160} alt='hero'  className={styles.image}/>
                </div>
                </div>
             </Link>
            </>
            )
        })}
        </div>
        </div>
    </>
  );
};

export default Card;
