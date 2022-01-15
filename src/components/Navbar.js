import { Link } from 'react-router-dom';

//styles
import './Navbar.css';
import log from '../Assets/logo-icon.png';

const Navbar = () => {
  return (
    <div className='navbar'>
      <nav>
        <div className='logo'>
          <Link to='/'>
            <h2>
              <span className='rick'>Rick</span> <small>&</small>{' '}
              <span className='morty'>Morty</span>
            </h2>
          </Link>
        </div>
        <div className='links'>
          <Link to='/'>Charcters</Link>
          <Link to='/locations'>Location</Link>
          <Link to='/episodes'>Episodes</Link>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
