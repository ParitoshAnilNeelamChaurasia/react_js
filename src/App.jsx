import React, { useContext } from 'react'
import Header_11 from './components/Header_11'
import Section_11 from './components/Section_11'
import Footer_11 from './components/Footer_11'
import { DataContext } from './context/UserContext'

const App = () => {

  const data = useContext(DataContext)
  // console.log(data)
  return (
    <div>
      <h1>This is App.js {data}</h1>
      <Header_11/>
      <Section_11/>
      <Footer_11/>

    </div>
  )
}

export default App
