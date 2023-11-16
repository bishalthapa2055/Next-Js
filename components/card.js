import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Card = (props) => {
  return (
    <>
    <div className="container">
    <Link href={props.href}>
            <h2>{props.name}</h2>
            <Image src={props.img} width={260} height={160} alt={props.name} />
     
    </Link>
    </div>
    </>
  )
}

export default Card