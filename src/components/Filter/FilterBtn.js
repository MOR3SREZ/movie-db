import { useContext, useEffect, useState, useCallback } from 'react';

//compnents
import { FilterContext } from '../../Context/CatagoryContext';
//styles
import './FilterBtn.css';

const FilterBtn = ({ item, idx, name }) => {
  const { setStatus, setSpecies, setGender, setSelectPage } =
    useContext(FilterContext);
  const [value, setValue] = useState('');
  const [catagory, setCatagory] = useState('');

  const ClearValues = useCallback(() => {
    setCatagory('');
    setValue('');
    setSelectPage(1);
  }, [setSelectPage]);

  const onChange = (e) => {
    setCatagory(e.target.name);
    setValue(e.target.value);
  };

  useEffect(() => {
    if (catagory === 'status') {
      setStatus(value);
      ClearValues();
    } else if (catagory === 'species') {
      setSpecies(value);
      ClearValues();
    } else if (catagory === 'genders') {
      setGender(value);
      ClearValues();
    }
  }, [ClearValues, catagory, setGender, setSpecies, setStatus, value]);

  return (
    <div className='filter-btn'>
      <input
        className='filter-input'
        type='radio'
        name={name}
        id={`${item}-${name}-${idx}`}
        onChange={(e) => onChange(e)}
        value={item}
      />
      <label
        htmlFor={`${item}-${name}-${idx}`}
        className='filter-label'
        key={idx}
      >
        {item ? item : 'none'}
      </label>
    </div>
  );
};

export default FilterBtn;
