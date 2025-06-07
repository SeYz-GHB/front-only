import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useEffect } from 'react'
import axios from 'axios';

function App() {
  const [msg, setMsg] = useState(0)
  useEffect( () => {
    const fetch = async() => {
      try{
        const res = await axios.get('https://backend-only-uusg.onrender.com/api/hello');
        setMsg(res.data);


      }
      catch(err){
        console.log('eror', err);
      }
    }
    fetch();
    const interval = setInterval(fetch,3000);
    return() => clearInterval(interval);

  })


  return (
    <>
        <h2>{msg}</h2>
      
    </>
  )
}

export default App
