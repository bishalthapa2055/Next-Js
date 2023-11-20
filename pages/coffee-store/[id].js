import React from 'react'
import { useRouter } from 'next/router'
import Link  from 'next/link'
import CoffeeStoreData from "../../data/coffee-store.json"
import styles from "../../styles/Coffee-store.module.css"
import Image from 'next/image'
import getAllUsers from '@/lib/coffee-store'

export  async function getStaticProps({params}){
  // first to get the param id 

  

  //api  calls from the lib
  const coffeeStores = await getAllUsers()

 

  //learning way to find and send the derired id 
  // return{
  //   props :{
  //     coffeeStore : CoffeeStoreData.find((coffeeStore) =>{
  //       return coffeeStore.id.toString( ) ===  params.id// dynamic id 
  //     })

  //   }
  // }

  // but incase  of api calls 

   return{
    props :{
      coffeeStore :  coffeeStores.find((store) =>{
        return store.id.toString() === params.id
      }),
    }
  }


}

export async function getStaticPaths () {

  // general way to check the id present in static files 
  // const paths = CoffeeStoreData.map((coffeeStore) =>{
  //   return {
  //     params :{
  //       id : coffeeStore.id.toString()
  //     }
  //   }
  // })
  // return {
  //   paths ,
  //   fallback : false
  // }


  // but incase of api calls 
 
  const coffeeStores = await getAllUsers()

  const paths = coffeeStores.map((user) => ({
    params: {
      id: user.id.toString(),
    },
  }));

  return {
    paths,
    fallback: false,
  };
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
          <Image src="https://images.unsplash.com/photo-1566753323558-f4e0952af115?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHBvdHJhaXR8ZW58MHx8MHx8fDA%3D" width={250} height={250} alt='hero'  className={styles.image__addition}/>
        </div>
        <div className={styles.image__description}>
          <div className={styles.image__content}>

          <h1>
            {props.coffeeStore.address.street}  {props.coffeeStore.address.city}
          </h1>
          <h2>
            {props.coffeeStore.phone}
          </h2>
          <h2>
            {props.coffeeStore.website}
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