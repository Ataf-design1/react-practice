import React from 'react'

const Child1 = ({fruits}) => {
  return (
    <div>
        {fruits.map((fruit)=>(
            <li>
                {fruit}
            </li>
        ))}
    </div>
  )
}

export default Child1