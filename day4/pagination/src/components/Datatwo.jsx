import React from 'react'
import { useFetch } from '../Hooks/usefetch'

const Datatwo = () => {
    const posts =  useFetch("https://jsonplaceholder.typicode.com/users")
  return (
    <div>
        {posts.map((user)=>(
            <div key={user.id}>
                {user.name}
            </div>
        ))}
    </div>
  )
}

export default Datatwo