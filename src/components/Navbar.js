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
            <img src={log} alt='logo' />
          </Link>
        </div>
        <div className='links'>
          <Link to='/'>Home</Link>
          <Link to='/movies'>Movie</Link>
          <Link to='/watchlist'>Watchlist</Link>
          <Link to='/login'>Login</Link>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
