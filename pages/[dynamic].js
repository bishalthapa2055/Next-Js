import { useRouter } from 'next/router'
import React from 'react'

const Dynamic = () => {
    const router = useRouter()
    console.log(router)
  return (

    <>
    <h1> this is dynamic routers</h1>
        {router.query.dynamic}
    </>
  )
}

export default Dynamic