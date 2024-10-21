import React from 'react'

const Card_7_2 = (props) => {
  return (
    // display -> inline-block

    // border -> rounded
    <div className='bg-white text-black inline-block p-6 text-center rounded'>
      <h1>{props.user} {props.surname}</h1>
      <h2>{props.city} , {props.age}</h2>
      <button>Add Friend</button>
    </div>
  )
}

export default Card_7_2
