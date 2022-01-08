//styles
import { useEffect, useState } from 'react';
import './Card.css';
const Card = ({ result }) => {
  const [status, setStatus] = useState('status');
  useEffect(() => {
    if (result.status == 'Alive') {
      setStatus('status-alive');
    } else if (result.status == 'Dead') {
      setStatus('dead');
    } else if (result.status == 'unknown') setStatus('unknown');
  }, [result]);

  return (
    <div className='card'>
      <div className='poster'>
        <img src={result.image} alt='s' />
        <div className={`status ${status}`}>
          <p>{result.status}</p>
        </div>
      </div>
      <div className='info'>
        <div className='info-name'>
          <p>{result.name}</p>
        </div>
        <div className='location'>
          <p>
            Last Location
            <br />
            <span>{result.location.name}</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Card;
