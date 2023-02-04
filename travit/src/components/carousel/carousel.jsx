import { React, useState} from 'react';
import './carousel.css';


const Carousel = ({ images }) => {

  const [currentIndex, setCurrentIndex] = useState(0);

  const loadImage = (index) => {
    setCurrentIndex(index);
    
    
  };
  return (
    <div className='image-slider'>
        <div>{images[currentIndex]}</div>
        
         <div className="owl-dots"  style={{justifyContent: 'center', margin: '0 3 px', display: 'flex'}}>
          {images.map((image, index) => {
            return (
              <button key={index} role="button" className="owl-dot" tabIndex="0" onClick={() => loadImage(index)}><span></span></button>
            )
          })}
        </div>
    </div>
   
  )
};

export { Carousel };