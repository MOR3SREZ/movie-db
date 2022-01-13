//components
import Gender from './Catagory/Gender';
import Species from './Catagory/Species';
import Status from './Catagory/Status';

//styles
import './Filter.css';

const Filter = () => {
  return (
    <div className='filter'>
      <Status />
      <Gender />
      <Species />
    </div>
  );
};

export default Filter;
