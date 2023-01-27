import * as React from 'react';
import './App.css';
import { NavBar } from './components/navbar/navbar';

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
    </div>
  );
}

export default App
