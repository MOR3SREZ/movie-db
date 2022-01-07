import { useState } from 'react';
import { useFetch } from '../hooks/useFetch';

//styles
import Card from './Card';
import './Main.css';

const Main = () => {
  const [url, setUrl] = useState('https://rickandmortyapi.com/api/');
  const { data, loading, error } = useFetch(
    'https://rickandmortyapi.com/api/character'
  );

  console.log(data.results);

  return (
    <div className='main'>
      <div className='genre-section'>
        <div className='title'>
          <div className='genre-name-box'>
            <h2 className='genre-name'>ACTION</h2>
          </div>
        </div>
      </div>
      <div className='card-section'>
        {data.results && data.results.map((res) => <Card result={res} />)}
      </div>
    </div>
  );
};

export default Main;
