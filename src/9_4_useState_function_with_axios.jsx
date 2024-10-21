import axios from 'axios'
import React, { useState } from 'react'

// active:scale-90 -> click on the button , button zooms out and in
const App = () => {

  const [data , setdata] = useState([])

  const getData = async () => {
    const response = await axios.get('https://picsum.photos/v2/list')

    setdata(response.data)
  }
  return (
    <div className='p-10'>
      <button onClick={getData} className='bg-teal-700 text-white font-semibold text-2xl px-6 py-3 rounded active:scale-90'>Get Data</button>

      <div className='p-5 bg-gray-950 text-white'>
            {
              data.map(function(){
                return <h1>Hello</h1>
              })
            }
      </div>
    </div>
  )
}

export default App
