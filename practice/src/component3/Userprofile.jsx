import React from 'react'
import Avtar from './Avtar'
import UserInfo from './UserInfo'

const Userprofile = () => {
    let data = {
        name : "Ataf",
        email : "atafkhan980@gmail.com",
        bio : "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempore minus commodi quaerat quas ullam beatae voluptatum officiis provident, totam facere omnis illum deleniti dolor, sit, iste nemo vitae? Dolorem, modi."
    }
  return (
    <div>
        <Avtar url={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQoydfyf35PsAhZvRDctwkNAlHmRavWkKZlDV4hyP9nAIYCx60U2-XG7yA&s"}/>
        <UserInfo data={data}/>
    </div>
  )
}

export default Userprofile