import { Route, Routes } from 'react-router-dom';
import { useEffect, useState } from 'react';

//pages
import Home from './pages/Home';
import WatchList from './pages/watchList';
import Login from './pages/Login';

//styles
import './App.css';
import Movies from './pages/Movies';

function App() {
  const [find, setFind] = useState([]);
  const [id, setId] = useState([]);
  const [url, setUrl] = useState('');

  ////////////////////////////////////////
  //start گرفتن فیلم با موضوع و بعد از اون گرفتن جزعیات
  useEffect(() => {
    fetch(
      'https://imdb8.p.rapidapi.com/title/get-popular-movies-by-genre?genre=%2Fchart%2Fpopular%2Fgenre%2Fadventure',
      {
        method: 'GET',
        headers: {
          'x-rapidapi-host': 'imdb8.p.rapidapi.com',
          'x-rapidapi-key':
            '69df941599msh2c78a6b2f12d582p1563f3jsnd3e0ec3f1134',
        },
      }
    )
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setId(data.map((tt) => tt.id.slice(7).slice(0, -1)));
      })
      .catch((err) => {
        // console.error(err);
      });
  }, []);

  //start  گرفتن جزئیات هر فیلم
  useEffect(() => {
    fetch(
      'https://imdb8.p.rapidapi.com/title/get-overview-details?tconst=tt0944947&currentCountry=US',
      {
        method: 'GET',
        headers: {
          'x-rapidapi-host': 'imdb8.p.rapidapi.com',
          'x-rapidapi-key':
            '69df941599msh2c78a6b2f12d582p1563f3jsnd3e0ec3f1134',
        },
      }
    )
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
      })
      .catch((err) => {
        // console.error(err);
      });
  }, []);

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
