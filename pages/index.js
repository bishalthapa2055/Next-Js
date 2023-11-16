import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Banner from '@/components/banner'
import Card from '@/components/card'
import data from "../data/coffee-store.json"


const inter = Inter({ subsets: ['latin'] })



export async function getStaticProps(context){
  return{
      props :{
          data,
      }, 
  }
}


export default function Home(props) {
  console.log(props)
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
      

      <Card/>
      
      </div>
      </main>
    </>
  )
}
