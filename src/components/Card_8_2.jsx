import React from 'react'

// margin-left: 2rem (ml-2)
const Card_8_2 = (props) => {
  console.log(props.city)
  return (
    <div className='mr-7 bg-white text-black inline-block p-6'>
    <img className = 'ml-8 h-32 w-32 rounded-full mb-3'src = "" alt=""/>
    <h1 className='text-2xl'>{props.user} Surname</h1>
    <h4 className='text-blue-400'>{props.profession}</h4>
    <h2>{props.city},{props.age}</h2>
    <button className='ml-8 mt-5 bg-greedn-700 text-white px-4 py-2 rounded font-medium'>Add Friend</button>
    </div>
  )
}

export default Card_8_2
