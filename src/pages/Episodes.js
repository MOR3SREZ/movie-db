import { useState, useEffect } from 'react';
import { useFetch } from '../hooks/useFetch';

//componentes
import Navbar from '../components/Navbar';
import Select from '../components/Select/Select';
import Main from '../components/Main';

//styles
import './Episodes.css';

const Episodes = () => {
  const [id, setId] = useState('');
  const [url, setUrl] = useState('https://rickandmortyapi.com/api/episode/');
  const [results, setResults] = useState([]);
  const { data, error, loading } = useFetch(url);

  const { name, air_date, characters, episode } = data;
  console.log(data);

  useEffect(() => {
    setUrl(`https://rickandmortyapi.com/api/episode/${id}`);

    setResults([]);
  }, [id]);
  useEffect(() => {
    characters?.map((resident) =>
      fetch(resident)
        .then((response) => response.json())
        .then((data) => setResults((prev) => [...prev, data]))
    );
  }, [characters]);

  return (
    <div className='location-page'>
      <Navbar />
      <div className='title'>
        <h2>
          {name ? name : 'Unknown'}
          {' : '}
          {`(${episode ? episode : 'Unknown'})`}
        </h2>
        <p>{air_date ? air_date : 'Unknown'}</p>
      </div>
      <div className='location-main'>
        <Select count={51} setId={setId} name='Episode' />

        <Main data={results} loading={loading} error={error} key={'e'} />
      </div>
    </div>
  );
};

export default Episodes;
