import { useCallback, useEffect, useState } from 'react';
import { useFetch } from '../hooks/useFetch';

//components
import Main from '../components/Main';
import Navbar from '../components/Navbar';
import SearchBar from '../components/SearchBar';
import ReactPaginate from 'react-paginate';
import Filter from '../components/Filter';

//styles
import './Home.css';

const Home = () => {
  const [search, setSearch] = useState('');
  const [page, setPage] = useState(1);
  const [selectPage, setSelectPage] = useState('');

  const [url, setUrl] = useState(`https://rickandmortyapi.com/api/character`);
  const { data, loading, error } = useFetch(url);

  useEffect(() => {
    setPage(data.info?.pages);
  }, [setPage, data]);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const changePage = useCallback(({ selected }) => {
    setSelectPage(selected + 1);
  });

  useEffect(() => {
    setUrl(
      `https://rickandmortyapi.com/api/character/${'?page=' + selectPage}&${
        'name=' + search
      }`
    );
  }, [search, changePage, selectPage]);

  return (
    <div className='home'>
      <Navbar />
      <SearchBar setSearch={setSearch} setSelectPage={setSelectPage} />
      <Filter />
      <Main data={data} loading={loading} error={error} key={'c'} />

      {!error && (
        <ReactPaginate
          previousLabel={'prev'}
          nextLabel={'next'}
          pageCount={page}
          pageRangeDisplayed={5}
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

export default Home;
