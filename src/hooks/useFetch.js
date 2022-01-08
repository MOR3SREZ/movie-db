import { useState, useEffect } from 'react';

export const useFetch = (url) => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  // const fetchData =  () => {

  // };

  useEffect(() => {
    const controller = new AbortController();

    const fetchData = async () => {
      setLoading(true);

      try {
        const response = await fetch(url, { signal: controller.signal });
        if (!response.ok) {
          throw new Error(response.statusText);
        }
        const data = await response.json();
        setLoading(false);
        setData(data);
        setError(null);
        console.log(data);
      } catch (err) {
        if (err.name === 'AbortError') {
          console.log('the fetch was aborted');
        } else {
          setLoading(false);
          setError('Could not fetch the data');
          console.log(err.message);
        }
      }
    };

    fetchData();

    return () => {
      controller.abort();
    };
  }, [url]);

  return { data, error, loading };
};
