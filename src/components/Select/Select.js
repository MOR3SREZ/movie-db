import './Select.css';

const Select = ({ count, setId, name }) => {
  const locationHandler = (e) => {
    setId(e.target.value);
  };

  return (
    <div className='select'>
      <select
        name='select-location'
        id='location'
        onChange={(e) => locationHandler(e)}
      >
        <option>Search for {name}</option>
        {[...Array(count).keys()].map((num) => (
          <option value={num + 1} key={`loc ${num}`}>
            {name} - {num + 1}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Select;
