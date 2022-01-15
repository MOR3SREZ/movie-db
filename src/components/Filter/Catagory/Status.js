import React from 'react';
import FilterBtn from '../FilterBtn';

const Status = () => {
  const status = ['', 'Alive', 'Dead', 'Unknown'];
  return (
    <div className='container'>
      <div className='buttons'>
        {status.map((item, idx) => (
          <FilterBtn item={item} key={idx} idx={idx} name='status' />
        ))}
      </div>
    </div>
  );
};

export default Status;
