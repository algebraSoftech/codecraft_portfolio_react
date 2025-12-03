import React, { useState, useEffect } from 'react';
import HomePage from './pages/HomePage';
import { ClipLoader } from 'react-spinners'; // Example spinner from react-spinners

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {

    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  return (
    <div>
      {loading ? (
        <div className="flex items-center justify-center h-screen">
          <ClipLoader className='loader' size={50} color={"#123abc"} loading={loading} />
        </div>

      ) : (
        <HomePage />
      )}
    </div>
  );
}

export default App;
