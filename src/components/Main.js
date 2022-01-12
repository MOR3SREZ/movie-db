//styles
import Card from './Card';
import './Main.css';

const Main = ({ data, loading, error }) => {
  return (
    <div className='main'>
      <div className='card-section'>
        {loading && <h1 className='loading'> Loading</h1>}
        {!!data.results & !!!error
          ? data.results
              // .filter((e) => e.status === 'Alive')
              .map((res) => <Card result={res} key={res.id} />)
          : null}
        {error && <h1 className='error'>{error}</h1>}
      </div>
    </div>
  );
};

export default Main;
