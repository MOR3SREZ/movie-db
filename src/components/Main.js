import { useState, useEffect } from 'react';

//styles
import Card from './Card';
import Genre from './Genre';
import './Main.css';

const Main = () => {
  //////////////////////////////
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
            '1cc42beee1msh10fc1706315bb01p189835jsncb6bd2cf79f6',
        },
      }
    )
      .then((response) => response.json())
      .then((data) => {
        const temp = data.map((i) => i.slice(7).slice(0, -1));
        setId(temp.slice(0, 5));
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  //start  گرفتن جزئیات هر فیلم
  const b = [];
  useEffect(() => {
    if (id) {
      id.map((item) =>
        fetch(
          `https://imdb8.p.rapidapi.com/title/get-overview-details?tconst=${item}&currentCountry=US`,
          {
            method: 'GET',
            headers: {
              'x-rapidapi-host': 'imdb8.p.rapidapi.com',
              'x-rapidapi-key':
                '1cc42beee1msh10fc1706315bb01p189835jsncb6bd2cf79f6',
            },
          }
        )
          .then((response) => response.json())
          .then((data) => {
            console.log(data);

            setFind((prevState) => [...prevState, data]);
          })
          .catch((err) => {
            console.error(err);
          })
      );
    }
  }, [id]);
  console.log(find);

  /////////////////////////
  return (
    <div className='main'>
      <div className='genre-section'>
        <div className='title'>
          <div className='genre-name-box'>
            <h2 className='genre-name'>ACTION</h2>
          </div>
        </div>
        {/* <Genre /> */}
      </div>
      <div className='card-section'>
        {find.map((find) => (
          <Card find={find} key={find.id} />
        ))}
      </div>
    </div>
  );
};

export default Main;
