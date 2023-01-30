import React from 'react';
import { Button} from 'react-bootstrap';
import { useSnapCarousel } from 'react-snap-carousel';
import { images } from '../../assets/images/yyc_images.jsx';


const PictureSlider = () => {
    const { scrollRef, pages, activePageIndex, next, prev, goTo } =
    useSnapCarousel();

    return (
    <>
      <ul
        ref={scrollRef}
        style={{
          display: 'flex',
          overflow: 'auto',
          scrollSnapType: 'x mandatory'
        }}
      >
        {Array.from({ length: images.length }).map((_, i) => (
          <li
            key={i}
            style={{
              backgroundColor: 'aqua',
              fontSize: '50px',
              width: '250px',
              height: '250px',
              flexShrink: 0,
              color: '#fff',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center'
            }}
          >
            {images[i]}
          </li>
        ))}
      </ul>
      <div>
        {activePageIndex + 1} / {pages.length}
      </div>
      <Button onClick={() => prev()}>Prev</Button>
      <Button onClick={() => next()}>Next</Button>
    </>
  );
};

export { PictureSlider };