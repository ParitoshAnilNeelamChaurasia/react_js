import React, { useState } from 'react'

const App = () => {

  const changeA = () => {
    console.log("chal gaya")
    setA(20)
  } 
  
  const [a,setA]  = useState(10)
  return(
    <div>
      <h1>Value of a is {a}</h1>
      <button onClick={changeA}>ChangeA</button>
    </div>
  )
}

export default App