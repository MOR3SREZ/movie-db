import React from 'react';
import FilterBtn from '../FilterBtn';

const Gender = () => {
  const genders = ['', 'female', 'male', 'genderless', 'unknown'];
  return (
    <div className='container'>
      <div className='buttons'>
        {genders.map((item, idx) => (
          <FilterBtn item={item} key={idx} idx={idx} name='genders' />
        ))}
      </div>
    </div>
  );
};

export default Gender;
