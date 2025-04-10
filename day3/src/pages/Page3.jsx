import React from 'react'
import { useContext } from 'react'
import { NameContext } from '../context/Nameprovider'

const Page3 = () => {
   const { handleChange} = useContext(NameContext)
  return (
    <div>
          <button onClick={()=>handleChange()}>changename</button>
    </div>
  )
}

export default Page3