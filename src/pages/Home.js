//components

import Main from '../components/Main';
import Navbar from '../components/Navbar';

//styles
import './Home.css';

const Home = () => {
  return (
    <div className='home'>
      <Navbar />
      <Main />
    </div>
  );
};

export default Home;
