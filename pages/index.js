import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Banner from '@/components/banner'
import Card from '@/components/card'
import data from "../data/coffee-store.json"
import nextConfig from '@/next.config'


const inter = Inter({ subsets: ['latin'] })



export  async function getStaticProps(){
  // first to get the param id 

  const options = {
    method: "GET",
    headers: {
      Accept: "application/json", // Fix the typo here
      // Authorization 
    },
  };

  const data = await fetch("https://jsonplaceholder.typicode.com/users" , options);

  const newData = await data.json()

 

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
      coffeeStore :  newData,
    }
  }


}


export default function Home(props) {
  // console.log(props.data)
  console.log(nextConfig.env)
  return (
    <>
      <Head>
        <title>Coffee Conneisser</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={`${styles.main} ${inter.className}`}>
      <div className='container'>

      <Banner />
      
      {
      props.coffeeStore.length > 0 && (
        <>
        <Card coffeeStore = {props}/>
        </> 
      )
      }
      
      </div>
      </main>
    </>
  )
}
