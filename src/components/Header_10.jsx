import React from 'react'

const Header_10 = () => {
  return (
    <div className='py-7 px-10 bg-emrald-600 text-white flex items-center justify-between'>
      <h2 className='text-2xl'>
        Paritosh
      </h2>
      <div className='flex gap-10'>
        <a className='text-xl underline' href = "/">Home</a>
        <a className='text-xl underline' href="/about">About</a>
        <a className='text-xl underline' href = "/contact">contact</a>
        <a className='text-xl underline' href = "/product">Product</a>
      </div>
    </div>
  )
}

export default Header_10
