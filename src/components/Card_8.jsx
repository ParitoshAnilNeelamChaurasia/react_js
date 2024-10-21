import React from 'react'

// margin-left: 2rem (ml-2)
const Card_8 = (props) => {
  return (
    <div className='bg-white text-black inline-block p-6'>
    <img className = 'h-32 w-32 rounded-full mb-3'src = "" alt=""/>
    <h1 className='text-2xl'>{props.user} Surname</h1>
    <h2>{props.city},{props.age}</h2>
    <button className='ml-8 mt-5 bg-greedn-700 text-white px-4 py-2 rounded font-medium'>Add Friend</button>
    </div>
  )
}

export default Card_8
