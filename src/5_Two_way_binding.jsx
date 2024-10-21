import React, { useState } from "react";

const App = () => {
  const [username, setUsername] = useState('');

  const submitHandler = (e) => {
    e.preventDefault();
    console.log(username);
    setUsername(''); // Reset the input field after submission
  };

  return (
    <div>
      <form onSubmit={submitHandler}>
        <input 
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className='px-4 rounded py-3 text-xl m-5'
          type="text"
          placeholder='Enter your name'
        />
        <button className='px-4 text-white py-3 text-xl font-semibold bg-emerald-600 rounded'>
          Submit
        </button>
      </form>
    </div>
  );
};

export default App;
