import { useState, useEffect } from 'react';
import axios from 'axios';

function App () {
  const [count, setCount] = useState(0);

  const fetchAPI = async () => {
    const response = await axios.get('http://localhost:5080/');
    console.log(response.data.fruits);
  };

  useEffect(() => {
    fetchAPI();
  }, []);

  return (

    <h1>Hello</h1>


  );
}

export default App;
