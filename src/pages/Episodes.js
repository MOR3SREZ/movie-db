//componentes
import Navbar from '../components/Navbar';
import { useFetch } from '../hooks/useFetch';
//styles
import './Episodes.css';
const Episodes = () => {
  const { data, loading, error } = useFetch(
    'https://rickandmortyapi.com/api/episode'
  );
  console.log('From episode', data);
  return (
    <div>
      <Navbar />
      {/* <Main data={data} loading={loading} error={error} key={'e'} /> */}
    </div>
  );
};

export default Episodes;
