import { useContext, useState } from 'react';
import { FilterContext } from '../../Context/CatagoryContext';

//components
import Gender from './Catagory/Gender';
import Species from './Catagory/Species';
import Status from './Catagory/Status';

//styles
import './Filter.css';
import arrow from '../../Assets/arrow.png';

const Filter = () => {
  const { filterCleaner } = useContext(FilterContext);
  const [showClassst, setshowClassst] = useState('hidden');
  const [showClassge, setshowClassge] = useState('hidden');
  const [showClasssp, setshowClasssp] = useState('hidden');

  return (
    <div className='filter'>
      <div className='filter-status'>
        <img className={`arrow ${showClassst}`} src={arrow} alt='arrow' />
        <div
          onClick={() => {
            if (showClassst === 'hidden') {
              setshowClassst('show');
            } else if (showClassst !== 'hidden') setshowClassst('hidden');
          }}
          className={` temp ${showClassst}`}
        >
          Status
        </div>
        <div className='item'>
          <Status />
        </div>
      </div>
      <div className='filter-gender'>
        <img className={`arrow ${showClassge}`} src={arrow} alt='arrow' />
        <div
          className={` temp ${showClassge}`}
          onClick={() => {
            if (showClassge === 'hidden') {
              setshowClassge('show');
            } else if (showClassge !== 'hidden') setshowClassge('hidden');
          }}
          // eslint-disable-next-line react/jsx-no-duplicate-props
          className={` temp ${showClassge}`}
        >
          Gender
        </div>
        <div className='item'>
          <Gender />
        </div>
      </div>
      <div className='filter-species'>
        <img className={`arrow ${showClasssp}`} src={arrow} alt='arrow' />
        <div
          className={` temp hidden`}
          onClick={() => {
            if (showClasssp === 'hidden') {
              setshowClasssp('show');
            } else if (showClasssp !== 'hidden') setshowClasssp('hidden');
          }}
          // eslint-disable-next-line react/jsx-no-duplicate-props
          className={` temp ${showClasssp}`}
        >
          {' '}
          Species
        </div>
        <div className='item'>
          <Species />
        </div>
      </div>

      <button onClick={filterCleaner} className='clear-btn'>
        Clear
      </button>
    </div>
  );
};

export default Filter;
