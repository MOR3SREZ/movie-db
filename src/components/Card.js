//styles
import './Card.css';
const Card = ({ result }) => {
  // ... Function
  const add3Dots = (string, limit) => {
    const dots = '...';
    if (string.length > limit) {
      string = string.substring(0, limit) + dots;
    }

    return string;
  };

  console.log(result);
  return (
    <div className='card'>
      <div className='poster'>
        <img src={result.image} alt='s' />
        <div className='poster-about'>
          <p className='about'>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquam
            dolorum fugit consequuntur voluptas odit illum.
          </p>
          <div>
            <p className='rate'>
              Rate:
              <span>9</span>/10
            </p>
            <p className='age'>R</p>
          </div>
        </div>
      </div>
      <div className='info'>
        <div className='info-name'>
          <p>{result.name}</p>
          <span>2022</span>
        </div>
        <div className='info-catagory'>
          <p>fun - fuck - fear</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
