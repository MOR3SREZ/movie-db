import { Route, Routes } from 'react-router-dom';

//pages
import Home from './pages/Home';
import WatchList from './pages/watchList';
import Login from './pages/Login';

//styles
import './App.css';
import Movies from './pages/Movies';

function App() {
  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/movies' element={<Movies />} />
        <Route path='/watchlist' element={<WatchList />} />
        <Route path='/login' element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
