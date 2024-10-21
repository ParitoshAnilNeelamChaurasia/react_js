// passing data inside props

import React from 'react'
import Card_8_2 from './components/Card_8_2'

const App = () => {

  
    const users = [
      {
        "name": "Paritosh Chaurasia",
        "city": "Bhagalpur",
        "age": 22,
        "profession": "Web Developer & Competitive Programmer",
        "profilephoto": "https://example.com/photos/paritosh.jpg"
      },
      {
        "name": "Ravi Sharma",
        "city": "Delhi",
        "age": 25,
        "profession": "Data Scientist",
        "profilephoto": "https://example.com/photos/ravi.jpg"
      },
      {
        "name": "Ayesha Khan",
        "city": "Mumbai",
        "age": 28,
        "profession": "UI/UX Designer",
        "profilephoto": "https://example.com/photos/ayesha.jpg"
      },
      {
        "name": "Neha Verma",
        "city": "Pune",
        "age": 24,
        "profession": "Software Engineer",
        "profilephoto": "https://example.com/photos/neha.jpg"
      },
      {
        "name": "Kunal Gupta",
        "city": "Bangalore",
        "age": 27,
        "profession": "Product Manager",
        "profilephoto": "https://example.com/photos/kunal.jpg"
      }
    ]
  // get Hello -> 5times (check console window)
  users.forEach(function(){
    console.log("Hello")
  })

  // using this we get all data     (check console window)
  users.forEach(function(elem){
    console.log(elem)
  })

  /* users.map(function(){
    return "hey"
  }) */


  return (
    <div className='p-10'>
      {
        users.map(function(elem,idx){
          return <Card_8_2 key = {idx} username = {elem.name} age = {elem.age} city = {elem.city} photo = {elem.profilephoto}/>
        })
      }
    </div>
  )
}

export default App
