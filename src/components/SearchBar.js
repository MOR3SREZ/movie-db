//styles
import { useEffect, useState } from 'react';
import './SearchBar.css';

const SearchBar = ({ setSearch, setSelectPage }) => {
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
          placeholder='Search ...'
          onChange={(e) => setInput(e.target.value)}
          value={input}
        />
        <button type='submit'>Search</button>
      </form>
    </div>
  );
};

export default SearchBar;
