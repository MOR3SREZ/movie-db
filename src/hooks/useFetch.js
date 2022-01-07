import { useState, useEffect, useCallback } from 'react';

export const useFetch = (url) => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  // const fetchData =  () => {

  // };

  useEffect(async () => {
    setLoading(true);
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(response.statusText);
      }
      const data = await response.json();
      console.log(data);
      setLoading(false);
      setData(data);
      setError(null);
    } catch (err) {
      if (err.name === 'AbortError') {
        console.log('the fetch was aborted');
      } else {
        setLoading(false);
        setError('Could not fetch the data');
      }
    }
  }, [url]);

  return { data, error, loading };
};
