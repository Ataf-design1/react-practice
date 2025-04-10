import React, { useContext } from 'react'
import { NameContext } from '../context/Nameprovider'

const Page1 = () => {
    const {name , handleChange} = useContext(NameContext)

   

  return (
    <div>
        <h1>{name}</h1>
      

    </div>
  )
}

export default Page1