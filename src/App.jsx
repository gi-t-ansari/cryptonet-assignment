import React, {useState, useEffect} from 'react';
import './App.css';
import { Home } from './pages';
import axios from 'axios';
import { API_URL } from './config';

function App() {

  const [data, setData] = useState([]);

  const fetchData = async () => {
    try{
      const res = await axios.get(API_URL);
      const data = res.data.results
      setData(data);
    } catch(e) {
      console.error(e)
    }
  }

  useEffect(() => {
    fetchData();
  },[])

  return (
    <div>
        <Home data={data}/>
    </div>
  );
}

export default App;
