import React from 'react'

const Dashboard = ({isLogedin , setIslogedin }) => {
  return (
    <div>
        <p>{isLogedin ? "Plz Login":"Welcome Back, User"}</p>
        <button onClick={setIslogedin(!isLogedin)}>{isLogedin ? "login":"logout"}</button>
    </div>
  )
}

export default Dashboard