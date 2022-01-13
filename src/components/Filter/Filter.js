import { useContext } from 'react';
import { FilterContext } from '../../Context/CatagoryContext';

//components
import Gender from './Catagory/Gender';
import Species from './Catagory/Species';
import Status from './Catagory/Status';

//styles
import './Filter.css';

const Filter = () => {
  const { filterCleaner } = useContext(FilterContext);
  return (
    <div className='filter'>
      <button onClick={filterCleaner}>Clear</button>
      <Status />
      <Gender />
      <Species />
    </div>
  );
};

export default Filter;
