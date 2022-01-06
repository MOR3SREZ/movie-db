// import 'path-to-the-file/splide.min.css';
import '@splidejs/splide/dist/css/splide.min.css';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import './Genre.css';
import Card from './Card';

const Genre = () => {
  return (
    <Splide
      options={{
        type: 'loop',
        gap: '1rem',
        rewind: false,
        width: '90%',
        speed: 800,
        fixedWidth: '250px',
        arrows: false,
        pagination: true,
      }}
    >
      <SplideSlide>
        <Card />
      </SplideSlide>
      <SplideSlide>
        <Card />
      </SplideSlide>
      <SplideSlide>
        <Card />
      </SplideSlide>
      <SplideSlide>
        <Card />
      </SplideSlide>
      <SplideSlide>
        <Card />
      </SplideSlide>
    </Splide>
  );
};

export default Genre;
