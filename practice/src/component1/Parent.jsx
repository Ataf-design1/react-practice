import React from 'react'
import Child1 from './Child1'
import Child2 from './Child2'

const Parent = () => {
    const [fruits , setfruits] = React.useState(['apple' , 'banana', 'mango'])
  return (
    <div>
      <Child1 fruits={fruits}  setfruits={setfruits}/>
      <Child2 fruits={fruits}  setfruits={setfruits}/>
    </div>
  )
}

export default Parent