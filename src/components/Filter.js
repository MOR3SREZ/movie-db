// import { useState } from 'react';
// import { useFetch } from '../hooks/useFetch';

//styles
import './Filter.css';

const Filter = () => {
  // const [selectStatus, setSelectStatus] = useState('');
  const onChange = (e) => {
    console.log(e.target.value);
  };
  return (
    <div className='select-status'>
      <select
        name='status'
        id='status'
        onChange={(e) => {
          onChange(e);
        }}
      >
        <option className='opt' value=''>
          none
        </option>
        <option className='opt' value='alive'>
          Alive
        </option>
        <option className='opt' value='dead'>
          Dead
        </option>
        <option className='opt' value='unknown'>
          Unknown
        </option>
      </select>
      <select
        name='status'
        id='status'
        onChange={(e) => {
          onChange(e);
        }}
      >
        <option value=''>none</option>
        <option value='male'>Male</option>
        <option value='female'>Female</option>
        <option value='unknown'>Unknown</option>
      </select>
    </div>
  );
};

export default Filter;
