import { useState, useEffect } from 'react';

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const[isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);

  // Use effect runs after every render. Second value passed in is the dependency. So, it will only run if the dependency changes. If empty [], it will only run once
  useEffect(() => {
    setTimeout(() => {    
      fetch(url)
        .then(res => {
          if(!res.ok) {
            throw Error('Could not fetch the data for that resource');
          }
          return res.json();
        })
        .then((data) => {
          console.log(data);
          setError(null);
          setData(data)
          setIsPending(false);
        })
        .catch((err) => {
          setError(err.message);
          setIsPending(false);
        })
    }, 1000);
  }, [url]);

  return { data, isPending, error }
}

export default useFetch;