// import { useState, useEffect, useCallback } from 'react';

import { useState } from 'react';

// export const useFetch = (url) => {
//   const [data, setData] = useState(null);

//   const fetchData = useCallback(async () => {
//     const res = await fetch(url);
//     const json = await res.json();
//     setData(json);
//   }, [url]);

//   useEffect(() => {
//     fetchData();
//   }, [fetchData]);
export const useFetch = () => {};

//   ////////////////////////////
//   // const fetchWeather = useCallback(async () => {
//   //   setLoad(true);
//   //   const response = await fetch(url);
//   //   const json = await response.json();
//   //   if (json.cod === '404') {
//   //     setError(json.message);
//   //   } else {
//   //     setError(false);
//   //   }

//   //   setResult(json);
//   //   setLoad(false);
//   // }, [url]);

//   // useEffect(() => {
//   //   fetchWeather();
//   // }, [fetchWeather]);
//   ///////////////////////
//   return { data };
// };
