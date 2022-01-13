import { useCallback, useEffect, useState, useContext } from 'react';
import { useFetch } from '../hooks/useFetch';

//components
import Main from '../components/Main';
import Navbar from '../components/Navbar';
import SearchBar from '../components/SearchBar';
import ReactPaginate from 'react-paginate';
import Filter from '../components/Filter/Filter';
import { FilterContext } from '../Context/CatagoryContext';

//styles
import './Home.css';

const Home = () => {
  const { status, species, gender, setSelectPage, selectPage } =
    useContext(FilterContext);

  const [search, setSearch] = useState('');
  const [page, setPage] = useState(1);

  const [url, setUrl] = useState(
    `https://rickandmortyapi.com/api/character/?page=&name=&status=&gender=&type=`
  );
  const { data, loading, error } = useFetch(url);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const changePage = useCallback(({ selected }) => {
    setSelectPage(selected + 1);
  });

  useEffect(() => {
    setUrl(
      `https://rickandmortyapi.com/api/character/?page=${selectPage}&name=${search}&gender=${gender}&status=${status}&species=${species}`
    );
    setPage(data.info?.pages);
  }, [search, changePage, selectPage, status, species, gender, data]);

  console.log(data?.results);
  console.log(gender);

  return (
    <div className='home'>
      <Navbar />
      <SearchBar setSearch={setSearch} />
      <Filter />
      <Main data={data} loading={loading} error={error} key={'c'} />

      {!error && (
        <ReactPaginate
          previousLabel={'prev'}
          nextLabel={'next'}
          pageCount={page}
          pageRangeDisplayed={3}
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
