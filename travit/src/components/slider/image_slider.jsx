
import { useState } from 'react';


const ImageSlider = ({slides}) =>  {

  const [currentIndex, setCurrentIndex] = useState(0);


  const sliderStyles = {
    position: 'relative',
    top: '10',
    left: '20px',
    right: '20px',
    height: '100%',
    width: '100%',
    margin: 'auto',
    alignItems: 'center'
  };
  
  const slideStyles = {
    marginLeft: 'auto',
    marginRight: 'auto',
    display: 'flex',
    width: '150%',
    height: '150%',
    borderRadius: '10px',
    backgroundPosition: 'center',
    alignItems: 'center',
    backgroundSize: "cover",
    backgroundImage: `url(${slides[currentIndex].url})`

  };

  const prevButtonStyles = {
    position: 'absolute',
    top: '100%',
    transform: 'translate(0, -50%)',
    left: '3px',
    fontSize: '30px',
    color: '#fff',
    zIndex: 1,
    cursor: "pointer",

    
  };

  const nextButtonStyles = {
    position: 'absolute',
    top: '100%',
    transform: 'translate(0, -50%)',
    right: '-3px',
    fontSize: '30px',
    color: '#fff',
    zIndex: 1,
    cursor: "pointer",
  };

  const buttonContainerStyles = {
    display: 'flex',
    justifyContent: 'center'
  };

  const buttonStyles = {
    margin: "0 3 px",
    cursor: "pointer",
    fontSize: "15px",
  }

  const previousSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1: currentIndex - 1;
    setCurrentIndex(newIndex)
  }

  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0: currentIndex + 1;
    setCurrentIndex(newIndex);
  }

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex)
  }
  return (
    <div style={sliderStyles}>
      <button type="button" role="button" style={prevButtonStyles} onClick={previousSlide}></button>
      <button type="button" role="button" style={nextButtonStyles} onClick={nextSlide}></button>
      <div style={slideStyles}></div>
      <div style={buttonContainerStyles}>
       {slides.map((slide, slideIndex) => (
        <div key={slideIndex} style={buttonStyles} onClick={() => goToSlide(slideIndex)}>{String.fromCharCode(9898)}</div>
       ))}
      </div>
    </div>
  )
}


export { ImageSlider };

