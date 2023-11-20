import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import styles from './card.module.css';
// import data from "../data/coffee-store.json"




const Card = ({coffeeStore}) => {
    // console.log(coffeeStore)
  return (

    <>
        <div className='container'>
        <h2 className={styles.card__header__title}>Toronto Stores</h2>

            <div className={styles.grid__container} >

            {coffeeStore.coffeeStore.map((item) =>{
                return (
                    
                    <>
                    <Link href={`coffee-store/${item.id}`} key={item.id}>

                    <div className={styles.card__container}>
                <div className={styles.card__header}>
                    <h2>{item.name}</h2>
                </div>
                <div className={styles.card__image__container}>
                    <Image src="https://images.unsplash.com/photo-1625595234473-c00c86c73353?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHBvdHJhaXR8ZW58MHx8MHx8fDA%3D" width={260} height={160} alt='hero'  className={styles.image}/>
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
