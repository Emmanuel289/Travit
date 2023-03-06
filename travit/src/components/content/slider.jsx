import { React, useState} from 'react';
import './slider.css';


const Slider = ({ images }) => {

  const [currentIndex, setCurrentIndex] = useState(0);

  const handleButtonClick = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div>
        <div className='image-slider'>{images[currentIndex]}</div>
         <div className="owl-dots" >
          {images.map((image, index) => {
            return (
              <button key={index} role="button" className="owl-dot" tabIndex="0" onClick={() => handleButtonClick(index)}><span></span></button>
            )
          })}
        </div>
    </div>
  )
};

export { Slider };