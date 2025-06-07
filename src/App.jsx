import { useState, useEffect } from 'react';
import axios from 'axios';


function App() {
  const [msg, setMsg] = useState('');

  useEffect(() => {
    const fetchMessage = async () => {
      try {
        const res = await axios.get('https://backend-only-1-02vu.onrender.com/api/hello', {
          responseType: 'text'
        });
        setMsg(res.data);
      } catch (err) {
        console.error("Failed to fetch from backend:", err);
        setMsg('Error: could not reach backend');
      }
    };

    fetchMessage(); // initial fetch

    const interval = setInterval(fetchMessage, 3000); // fetch every 3 sec
    return () => clearInterval(interval); // cleanup
  }, []);

  return (
    <div className="App">
      <h2>{msg}</h2>
    </div>
  );
}

export default App;
