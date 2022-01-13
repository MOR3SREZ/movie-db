import { useFetch } from '../hooks/useFetch';
import { useState, useEffect } from 'react';

// compnents
import Navbar from '../components/Navbar';
import Select from '../components/Select/Select';
import Main from '../components/Main';

//styles

import './Locations.css';

const Locations = () => {
  const [id, setId] = useState('');
  const [url, setUrl] = useState('https://rickandmortyapi.com/api/location/');
  const [results, setResults] = useState([]);

  const { data, error, loading } = useFetch(url);

  const { name, type, dimension, residents } = data;

  useEffect(() => {
    setUrl(`https://rickandmortyapi.com/api/location/${id}`);
    setResults([]);
  }, [id]);
  useEffect(() => {
    residents?.map((resident) =>
      fetch(resident)
        .then((response) => response.json())
        .then((data) => setResults((prev) => [...prev, data]))
    );
  }, [residents]);

  return (
    <div className='location-page'>
      <Navbar />
      <div className='title'>
        <h2>
          {name ? name : 'Unknown'}
          {' : '}
          {`(${type ? type : 'Unknown'})`}
        </h2>
        <p>{dimension}</p>
      </div>
      <div className='location-main'>
        <Select count={126} setId={setId} name='Location' />

        <Main data={results} loading={loading} error={error} key={'e'} />
      </div>
    </div>
  );
};

export default Locations;
