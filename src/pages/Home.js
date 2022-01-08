//components

import { useEffect, useState } from 'react';
import Main from '../components/Main';
import Navbar from '../components/Navbar';
import SearchBar from '../components/SearchBar';
import { useFetch } from '../hooks/useFetch';

//styles
import './Home.css';
import ReactPaginate from 'react-paginate';

const Home = () => {
  const [url, setUrl] = useState('https://rickandmortyapi.com/api/character');

  const { data, loading, error } = useFetch(url);

  const changePage = ({ selected }) => {
    console.log(selected);
    setUrl(`https://rickandmortyapi.com/api/character?page=${selected + 1}`);
  };

  return (
    <div className='home'>
      <Navbar />
      <SearchBar />
      <Main data={data} loading={loading} error={error} key={'c'} />

      <ReactPaginate
        previousLabel={'prev'}
        nextLabel={'next'}
        pageCount={42}
        onPageChange={changePage}
        containerClassName={'paginationBttns'}
        previousLinkClassName={'prevBtn'}
        nextLinkClassName={'nextBtn'}
        disabledClassName={'paginationDisabled'}
        activeClassName={'paginationActive'}
      />
    </div>
  );
};

export default Home;
