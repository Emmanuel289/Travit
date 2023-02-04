import * as React from 'react';
import './App.css';
import { ToolBar }  from './components/toolbar/toolbar';
import { Carousel } from './components/carousel/carousel';
import { Content } from './components/cards/cards.jsx';
import { Footer } from './components/footer/footer';
import { images } from './assets/images/yyc_images.jsx';

const App = () => {
  
  return (
    <div>
      <div className="root" role="main">
      </div>
      <ToolBar />
      <h1 className="display-welcome-message">Travit enriches your travel experience</h1> 
      <Carousel images={images} />
      <Content />
      <Footer/> 
    </div>
  );
}

export default App;
