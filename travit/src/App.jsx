import * as React from 'react';
import './App.css';
import { NavBar } from './components/navbar/navbar';
import { PictureSlider } from './components/carousel/carousel';
import { Content } from './components/cards/cards';


const title = 'Travit';



const App = () => {
  
  return (
    <div>
      <div className="root" role="main">
      </div>
      <NavBar />
      <h1 className="display-welcome-title">Welcome to {title}</h1>
      <h2 className="display-welcome-message"> Personalize your travel experience and connect with travellers in your community</h2> 
      <PictureSlider />
      <hr/>
      <Content />
    </div>
  );
}

export default App
