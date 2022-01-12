// compnents
import Navbar from '../components/Navbar';

import { useFetch } from '../hooks/useFetch';
import { useState } from 'react';
import SearchBar from '../components/SearchBar';
import ReactPaginate from 'react-paginate';
import Filter from '../components/Filter';
import Main from '../components/Main';

//styles

import './Locations.css';

const Locations = () => {
  const [url, setUrl] = useState('https://rickandmortyapi.com/api/character');

  const { data, loading, error } = useFetch(url);

  const changePage = ({ selected }) => {
    setUrl(`https://rickandmortyapi.com/api/character?page=${selected + 1}`);
  };

  return (
    <div>
      <Navbar />
      <SearchBar setUrl={setUrl} />
      <Filter />
      <Main data={data} loading={loading} error={error} key={'c'} />
      {!error && (
        <ReactPaginate
          previousLabel={'prev'}
          nextLabel={'next'}
          pageCount={42}
          onPageChange={changePage}
          containerClassName={'paginationBtns'}
          pageClassName={'pageBtn'}
          pageLinkClassName={'pageLink'}
          previousLinkClassName={'prevBtn'}
          nextLinkClassName={'nextBtn'}
          disabledClassName={'paginationDisabled'}
          activeClassName={'paginationActive'}
        />
      )}
    </div>
  );
};

export default Locations;
