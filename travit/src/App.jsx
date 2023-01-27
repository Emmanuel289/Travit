import * as React from 'react';
import './App.css';
import { NavBar } from './components/navbar/navbar';
import { ImageSlider } from './components/slider/image_slider';
import { ImageList } from './components/slider/image_list';

const title = 'Travit';



const App = () => {

  const containerStyles = {
    width: "500px",
    height: "280px",
    position: "0 auto"
  }
  
  return (
    <div>
      <div className="root" role="main">
      </div>
      <NavBar />
      <h1 className="display-welcome-title">Welcome to {title}</h1>
      <h2 className="display-welcome-message"> Personalize your travel experience and connect with travellers in your community</h2>
      
      <section style={containerStyles}>
        <ImageSlider slides={ImageList}/>
      </section>
      
    </div>
  );
}

export default App
