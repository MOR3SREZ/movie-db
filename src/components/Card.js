//styles
import { useEffect, useState } from 'react';
import './Card.css';
const Card = ({ result }) => {
  const [statusClass, setStatusClass] = useState('status');

  const { status, image, name, location } = result;
  useEffect(() => {
    if (status === 'Alive') {
      setStatusClass('status-alive');
    } else if (status === 'Dead') {
      setStatusClass('dead');
    } else if (status === 'unknown') setStatusClass('unknown');
  }, [status]);

  return (
    <div className='card'>
      <div className='poster'>
        <img src={image} alt='s' />
        <div className={`status ${statusClass}`}>
          <p>{status}</p>
        </div>
      </div>
      <div className='info'>
        <div className='info-name'>
          <p>{name}</p>
        </div>
        <div className='location'>
          <p>
            Last Location
            <br />
            <span>{location.name}</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Card;
