//styles
import './Card.css';
const Card = () => {
  const url = `https://m.media-amazon.com/images/M/MV5BODk4ZjU0NDUtYjdlOS00OTljLTgwZTUtYjkyZjk1NzExZGIzXkEyXkFqcGdeQXVyMDM2NDM2MQ@@._V1_FMjpg_UX1000_.jpg`;
  return (
    <div className='card'>
      <div className='poster'>
        <img src={url} alt='Vikings poster' />

        <div className='poster-about'>
          <p className='about'>
            Viking is a movie about the great man 'Ragnar' who have a big dream
            and go to the west for first time and discover new lands
          </p>
          <div>
            <p className='rate'>
              Rate: <span>8.8</span>/10
            </p>{' '}
            <p className='age'>+18</p>
          </div>
        </div>
      </div>
      <div className='info'>
        <div className='info-name'>
          <p>vikings</p>
          <span>2015</span>
        </div>
        <div className='info-catagory'>
          <p>action - history - dram</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
