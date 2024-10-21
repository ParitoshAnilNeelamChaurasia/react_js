import React from 'react'

const App = () => {

  const submitHandler = (e)=>{
    e.preventDefault()
    console.log("submitted")
  }
  return (
    <div>
      <form onSubmit = {(e)=>{
        submitHandler(e)
      }}>
      <input className = 'px-4 rounded py-3 text-xl m-5' type = "text" placeholder='Enter your Name'/>
      <button className='px-4 text-white py-3 text-xl font-semibold bg-emerald-600 rounded'>Submit</button>
      </form>
    </div>
  )
}

export default App
