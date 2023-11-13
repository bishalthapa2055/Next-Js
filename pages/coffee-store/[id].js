import React from 'react'
import { useRouter } from 'next/router'
import Link  from 'next/link'
const CoffeeStore = () => {
    const router = useRouter()
    console.log(router)
  return (
    <>
    <div>

    <Link href='/'>
        Back to home
    </Link>
    <h1> data : {router.query.id}</h1>
    </div>
    </>
  )
}

export default CoffeeStore