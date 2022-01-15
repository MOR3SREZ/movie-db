//styles
import { useEffect, useState, useContext } from 'react';

//components
import { FilterContext } from '../Context/CatagoryContext';
//style
import './SearchBar.css';

const SearchBar = ({ setSearch }) => {
  const { setSelectPage } = useContext(FilterContext);
  const [input, setInput] = useState('');

  useEffect(() => {
    setSelectPage(1);
    setSearch(input);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [input, setSearch]);

  const submithandler = (e) => {
    e.preventDefault();
  };

  return (
    <div className='search-bar'>
      <form onSubmit={submithandler}>
        <input
          type='text'
          placeholder='Search for character ...'
          onChange={(e) => setInput(e.target.value)}
          value={input}
        />
        <button type='submit'>Search</button>
      </form>
    </div>
  );
};

export default SearchBar;
