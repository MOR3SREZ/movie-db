//styles
import './Card.css';
const Card = ({ find }) => {
  const add3Dots = (string, limit) => {
    const dots = '...';
    if (string.length > limit) {
      string = string.substring(0, limit) + dots;
    }

    return string;
  };

  return (
    <div className='card'>
      <div className='poster'>
        <img src={find.title.image.url} alt={find.title.title} />
        <div className='poster-about'>
          <p className='about'>{add3Dots(find.plotOutline.text, 160)}</p>
          <div>
            <p className='rate'>
              Rate:{' '}
              <span>{find.ratings.rating ? find.ratings.rating : '?'}</span>/10
            </p>
            <p className='age'>{find.certificates.US[0].certificate}</p>
          </div>
        </div>
      </div>
      <div className='info'>
        <div className='info-name'>
          <p>{find.title.title}</p>
          <span>{find.releaseDate.slice(0, 4)}</span>
        </div>
        <div className='info-catagory'>
          <p>
            {find.genres[0]} - {find.genres[1]} -{' '}
            {find.genres[2] ? find.genres[2] : null}{' '}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Card;
