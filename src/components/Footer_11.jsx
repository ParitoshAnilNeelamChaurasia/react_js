import React, { useContext } from 'react'
import { DataContext } from '../context/UserContext'

const Footer_11 = () => {
    const data = useContext(DataContext)
  return (
    <div>
      <h1>Footer_11{data}</h1>
    </div>
  )
}

export default Footer_11
