import React, { useState } from 'react'

const TodoInput = () => {
    const [task , settask]= useState("")
    const [ state , setstate] = useState('pending')
    const [db , setdb] = useState([])

    const handeladd =()=>{
        setdb([{id:Date.now(),...task , ...state}])
    }
  return (
    <div>
        <input 
        value={task}
        type="text"  placeholder='Enter Task'
        onChange={(e)=>settask(e.target.value)}
        />
        
       <select value={state}  onChange={(e)=>setstate(e.target.value)}>
        <option value="pending">Pending</option>
        <option value="completed">Completed</option>
        <option value="not-completed">Not-Cpmpleted</option>
       </select>
       <button onClick={()=>handeladd()}>Add</button>

       {db.map((ele)=>(
        <div key={ele.id}>
            {ele.task}
            {ele.state}
        </div>
       ))}
    </div>
  )
}

export default TodoInput