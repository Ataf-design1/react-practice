import React, { useState } from 'react'

const Child2 = ({fruits , setfruits}) => {
    const [newfruit , setnewfruit] = useState("")
  return (
    <div>
        <input type="text" placeholder='enter fruit name'  onChange={(e)=>setnewfruit(e.target.value)}/>
        <button onClick={()=>setfruits([...fruits , newfruit])}>Add</button>
    </div>
  )
}

export default Child2