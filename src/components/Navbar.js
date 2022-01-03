//styles
import { Link } from 'react-router-dom';
import './Navbar.css';
const Navbar = () => {
  return (
    <div className='navbar'>
      <nav>
        <div className='logo'>
          <h1>RoseDB</h1>
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
