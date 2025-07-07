import React from 'react';
import { Carousel } from 'react-bootstrap';
import carousel1 from '../assets/carousel1.webp';
import carousel2 from '../assets/carousel2.webp';
import carousel3 from '../assets/carousel3.webp';
import carousel4 from '../assets/carousel4.webp';
import carousel5 from '../assets/carousel5.webp';
import carousel6 from '../assets/carousel6.webp';

function CustomCarousel() {
  return (
    <Carousel fade interval={3000} className='m-3'>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={carousel6}
          alt="seventh slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={carousel3}
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={carousel1}
          alt="second slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={carousel2}
          alt="third slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={carousel1}
          alt="forth slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={carousel4}
          alt="fifth slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={carousel5}
          alt="sixth slide"
        />
      </Carousel.Item>
    </Carousel>
  );
}

export default CustomCarousel;
