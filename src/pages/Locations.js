// compnents
import Navbar from '../components/Navbar';
import Main from '../components/Main';
import { useFetch } from '../hooks/useFetch';

//styles

import './Locations.css';
const Locations = () => {
  const { data, loading, error } = useFetch(
    'https://rickandmortyapi.com/api/location'
  );
  console.log('From location', data);

  return (
    <div>
      <Navbar />
      {/* <Main data={data} loading={loading} error={error} key={'l'} /> */}
    </div>
  );
};

export default Locations;
