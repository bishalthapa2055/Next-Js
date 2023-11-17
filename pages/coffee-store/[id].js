import React from 'react'
import { useRouter } from 'next/router'
import Link  from 'next/link'
import CoffeeStoreData from "../../data/coffee-store.json"
import styles from "../../styles/Coffee-store.module.css"
import Image from 'next/image'

export function getStaticProps({params}){
  // first to get the param id 
  return{
    props :{
      coffeeStore : CoffeeStoreData.find((coffeeStore) =>{
        return coffeeStore.id.toString( ) ===  params.id// dynamic id 
      })

    }
  }
}

export function getStaticPaths () {
  const paths = CoffeeStoreData.map((coffeeStore) =>{
    return {
      params :{
        id : coffeeStore.id.toString()
      }
    }
  })
  return {
    paths ,
    fallback : false
  }

}
const CoffeeStore = (props) => {
  
  console.log("props " , props)
  const router = useRouter()

  if(router.isFallback ){
    return  <>
    Loaing ....
    </>
  }
  return (
    <>
    <div className='container'>
      <div className={styles.main__container}>
    
        <div className={styles.back_to_home}>
          <Link href="/" >

          <h2>Back to Home</h2>
          </Link>
        </div>
        <div className={styles.main__header}>
          <h1>{props.coffeeStore.name}</h1>
        </div>
        <div className={styles.two__container}>

        <div className={styles.image__container}>
          <Image src={props.coffeeStore.img} width={250} height={250} alt='hero'  className={styles.image__addition}/>
        </div>
        <div className={styles.image__description}>
          <div className={styles.image__content}>

          <h1>
            {props.coffeeStore.address}
          </h1>
          <h2>
            {props.coffeeStore.neighbourhood}
          </h2>
          <h2>
            {props.coffeeStore.websiteUrl}
          </h2>
          <div className={styles.vote__button}>
            <button className={styles.button} onClick={() => alert("clicked")}>
              Vote Up
            </button>
          </div>  
          </div>
        </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default CoffeeStore