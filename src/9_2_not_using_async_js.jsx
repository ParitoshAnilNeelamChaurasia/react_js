/* promise keep on pending */

import axios from 'axios'
import React from 'react'


// active:scale-90 -> click on the button , button zooms out and in
const App = () => {

  const getData = () => {
    const response = axios.get('https://picsum.photos/v2/list')

    // response came in the form of (promise) -> api ki form me daalkar aage nikal jaata hu
    console.log(response)
  }
  return (
    <div className='p-10'>
      <button onClick={getData} className='bg-teal-700 text-white font-semibold text-2xl px-6 py-3 rounded active:scale-90'>Get Data</button>

      <div className='p-5 bg-gray-950 text-white'>

      </div>
    </div>
  )
}

export default App
