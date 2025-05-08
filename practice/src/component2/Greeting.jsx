import React from 'react'

const Greeting = ({name , timeOfDay}) => {
  return (
    <h1>Good {timeOfDay}, {name}!</h1>

  )
}

export default Greeting