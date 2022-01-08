import { useState } from 'react';
import { useFetch } from '../hooks/useFetch';

//styles
import Card from './Card';
import './Main.css';

const Main = ({ data, loading, error }) => {
  return (
    <div className='main'>
      <div className='card-section'>
        {loading && <h1 className='loading'> Loading</h1>}
        {data.results &&
          data.results.map((res) => <Card result={res} key={res.id} />)}
        {error && <h1 className='error'>{error}</h1>}
      </div>
      <div className='page-prev'></div>
    </div>
  );
};

export default Main;
