// compnents
import Navbar from '../components/Navbar';

// import { useFetch } from '../hooks/useFetch';
// import { useState, useEffect } from 'react';
// import SearchBar from '../components/SearchBar';
// import ReactPaginate from 'react-paginate';
// import Filter from '../components/Filter/Filter';
// import Main from '../components/Main';

//styles

import './Locations.css';

const Locations = () => {
  // const [url, setUrl] = useState('https://rickandmortyapi.com/api/location');
  // const [location, setLocation] = useState([]);

  // const { data, loading, error } = useFetch(url);
  // const { results, info } = data;
  // useEffect(() => {
  //   results?.map((item) => setLocation((prev) => [...prev, item.name]));
  // }, [results]);

  // console.log(location);
  return (
    <div>
      <Navbar />
    </div>
  );
};

export default Locations;
