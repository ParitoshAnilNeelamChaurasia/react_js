import React, { useContext } from 'react'
import { DataContext } from '../context/UserContext'

const Header_11 = () => {
    const data = useContext(DataContext)
  return (
    <div>
      <h1>Footer</h1>
    </div>
  )
}

export default Header_11
