import React from 'react';
import { useSnapCarousel } from 'react-snap-carousel';
import { images } from '../../assets/images/yyc.jsx';


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
      <button onClick={() => prev()}>Prev</button>
      <button onClick={() => next()}>Next</button>
    </>
  );
};

export { PictureSlider };