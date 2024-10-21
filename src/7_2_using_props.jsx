import React from 'react'
import Card_7_2 from './components/Card_7_2'

const App = (props) => {
  console.log(props.user)
  return (
    <div className='p-10'>
      <Card_7_2 user = "Paritosh" age = '22' city = "Bareilly" surname = "Chaurasia"/>
    </div>
  )
}

export default App
