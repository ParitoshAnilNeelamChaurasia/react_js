import React from 'react'
import Card_8 from './components/Card_8'

const App = () => {

  
    const users = [
      {
        "name": "Paritosh Chaurasia",
        "city": "Bhagalpur",
        "age": 21,
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
    <div>
        <div className='p-10'>
          {
            users.map(function(elem){

              // get Hello Paritosh on screen
              // return <h1>Hello Paritosh</h1>

              // (gets all name) -> (cant return more than one output therfore commentout firstone)
              return <h1>{elem.name}</h1>
            })
          }
        </div>
    </div>
  )
}

export default App
