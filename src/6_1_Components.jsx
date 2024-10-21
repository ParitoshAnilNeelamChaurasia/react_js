import React from 'react'

import name from './components/Header'
import Header from './components/Header'
const App = () => {
  return(
    <>
    <Header></Header>
    <Header></Header>
    <nav className='bg-white flex py-5 px-10 items-center justify-between'>
      <h2 className='text-2xl'>Paritosh</h2>  
      <div className='flex gap-8 items-center'>
        <h4 className='text-xl'>About</h4>
        <h4 className='text-xl'>Contact</h4>
        <h4 className='text-xl'>Services</h4>
        <h4 className='text-xl'>Your Account</h4>
      </div>
    </nav></>
  )
}

export default App