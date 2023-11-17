import React from 'react'
import { useRouter } from 'next/router'
import Link  from 'next/link'
import CoffeeStoreData from "../../data/coffee-store.json"


export function getStaticProps({params}){
  // first to get the param id 

  console.log(params.id)
  return{
    props :{
      coffeeStore : CoffeeStoreData.find((coffeeStore) =>{
        return coffeeStore.id.toString( ) ===  params.id// dynamic id 
      })

    }
  }
}

export function getStaticPaths () {
  return {
    paths :[
      {params : { id : '1'}},
      {params : { id : '2'}}
    ],
    fallback : false
  }

}
const CoffeeStore = (props) => {
  
  console.log("props " , props)
  const router = useRouter()
  return (
    <>
    <div>

    <Link href='/'>
        Back to home
    </Link>
    <h1> data : {router.query.id}</h1>
    <Link href='/coffee-store/dynamic'>
        Go to dyna,oc [age]
    </Link>
    <p>{props.coffeeStore.address}</p>
    <p>{props.coffeeStore.name}</p>
    </div>
    </>
  )
}

export default CoffeeStore