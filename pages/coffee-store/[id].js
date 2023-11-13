import React from 'react'
import { useRouter } from 'next/router'
import Link  from 'next/link'
const CoffeeStore = () => {
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
    </div>
    </>
  )
}

export default CoffeeStore