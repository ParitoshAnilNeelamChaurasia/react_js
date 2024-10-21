import axios from 'axios';
import React, { useState } from 'react';

const App = () => {
  const [data, setData] = useState([]);

  const getData = async () => {
    const response = await axios.get('https://picsum.photos/v2/list');
    setData(response.data);
  };

  return (
    <div className='p-10'>
      <button onClick={getData} className='bg-teal-700 text-white font-semibold text-2xl px-6 py-3 rounded active:scale-90'>
        Get Data
      </button>

      <div className='p-5 bg-gray-950 text-white'>
        {data.map((elem, idx) => {
          return (
            <div key={idx} className='bg-gray-800 p-5 rounded mb-5'>
              <img className='h-40' src={elem.download_url} alt={elem.author} className='w-full h-auto rounded mb-2' />
              <p>Author: {elem.author}</p>
              <p>Image ID: {elem.id}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default App;
