// import React, { useState, useEffect } from 'react';

import { useEffect, useState } from "react";

// function TimerApp() {
//   const [seconds, setSeconds] = useState(0);
//   const [running, setRunning] = useState(false);

//   useEffect(() => {
//     let timer;
//     if (running) {
//       timer = setInterval(() => {
//         setSeconds(prev => prev + 1);
//       }, 1000);
//     }
//     return () => clearInterval(timer);
//   }, [running]);

//   return (
//     <div>
//       <h2>Timer: {seconds} sec</h2>
//       <button onClick={() => setRunning(true)}>Start</button>
//       <button onClick={() => setRunning(false)}>Pause</button>
//       <button onClick={() => { setSeconds(0); setRunning(false); }}>Reset</button>
//     </div>
//   );
// }

// export default TimerApp;


import React from 'react'

const TimerApp = () => {
    const [second, setsecond] = useState(0)
    const [running ,  setrunning ]= useState(false)

    useEffect(()=>{
        let timer ;
        if(running){
            timer = setInterval(() => {
                setsecond(prev=>prev+1)
            }, 1000);
        }
        return ()=> clearInterval(timer)

    },[running])
    
    console.log(second*25545);
    console.log(second*25545);
    console.log(second*25545);
    console.log(second*25545);
    console.log(second*25545);
    
    
  return (
    <div>
        <h1>{second}</h1>
        <button onClick={()=>setrunning(true)}>Start</button>
        <button onClick={()=>setrunning(false)} >Pause</button>
        <button onClick={()=>( setsecond(0),setrunning(false))}>Stop</button>
    </div>
  )
}

export default TimerApp