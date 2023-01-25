import * as React from 'react';
import './App.css';
import { Actions } from './components/actions/actions';
import { Search } from './components/search/search';

const title = 'Travit';



const App = () => {

  const actions = [
    {
      id: 1,
      action: 'Sign up',
      url: '/signup',
    },
    {
      id: 2,
      action: 'Log in',
      url: '/login',
    },
    {
      id: 3,
      action: 'Book a trip',
      url: '/book-a-trip',
    },
  ]
  
  return (
    <div>
      <div class="toolbar" role="banner">
      </div>
      <div class="content" role="main">
      </div>
      <h1 className="display-welcome-title">Welcome to {title}</h1>
      <h2 className="display-welcome-message"> Personalize your travel experience and connect with travellers in your community</h2>
      <Search />
      <hr />
      <Actions actions={actions}/>
      
    </div>
  );
}

export default App
