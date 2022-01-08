//styles
import { useState } from 'react';
import './SearchBar.css';

const SearchBar = () => {
  const [input, setInput] = useState('');
  const [value, setValue] = useState('');

  const submithandler = (e) => {
    e.preventDefault();
    setValue(input);
    console.log(input);
    setInput('');
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
