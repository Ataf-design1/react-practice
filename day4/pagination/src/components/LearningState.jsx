import React, { useState } from 'react'

const LearningState = () => {
    const [count , setcount] = useState(10)
  return (
    <div>
        <h1>{count}</h1>
        <button onClick={()=>setcount(count+1)}>inc</button>
        <button onClick={()=>setcount(count-1)}>dec</button>
        

    </div>
  )
}

export default LearningState