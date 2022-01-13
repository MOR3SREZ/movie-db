import React from 'react';
import FilterBtn from '../FilterBtn';

//styles
import './Catagory.css';

const Species = () => {
  const species = [
    '',
    'Human',
    'Alien',
    'Humanoid',
    'Poopybutthole',
    'Mythological',
    'Unknown',
    'Animal',
    'Disease',
    'Robot',
    'Cronenberg',
    'Planet',
  ];
  return (
    <div className='container'>
      <h2>Species</h2>

      <div className='buttons'>
        {species.map((item, idx) => (
          <FilterBtn item={item} key={idx} idx={idx} name='species' />
        ))}
      </div>
    </div>
  );
};

export default Species;
