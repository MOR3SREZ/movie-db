//styles
import Loader from '../components/Loader/Loader';
import Card from './Card';
import './Main.css';

const Main = ({ data, loading, error }) => {
  return (
    <div className='main'>
      <div className='card-section'>
        {loading && <Loader />}
        {error && <h1 className='error'>{error}</h1>}

        {!!data & !!!error & !!!loading
          ? data.map((res) => <Card result={res} key={res.id} />)
          : null}
      </div>
    </div>
  );
};

export default Main;
