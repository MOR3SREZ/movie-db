//styles
import Card from './Card';
import Genre from './Genre';
import './Main.css';

const Main = () => {
  return (
    <div className='main'>
      <div className='genre-section'>
        <div className='title'>
          <div className='genre-name-box'>
            <h2 className='genre-name'>ACTION</h2>
          </div>
        </div>
        <Genre />
      </div>
      <card className='card-section'>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </card>
    </div>
  );
};

export default Main;
