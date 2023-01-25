import * as React from 'react';
import './App.css';

const title = 'Travit';

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


const App = () => {
  
  return (
    <div>
      <h1 className="display-welcome-title">Welcome to {title}</h1>
      <h2 className="display-welcome-message"> Personalize your travel experience and connect with travellers in your community</h2>
      <Search />
      <hr />
      <Actions/>
      
    </div>
  );
}

const Actions =() => {
  return (
    <ul>
      {actions.map(
        (item) => 
        <li key={item.id}>
          <span>
            <a href={item.url}>{item.action}</a>
          </span>
        </li>
      )}
    </ul>
  );
}


const Search = () => {
  const handleChange = (event) => {
    // synthetic event
    console.log(event);
    // value of target (here: input HTML event)
    console.log(event.target.value);
  }
  return (
    <div>
      <label htmlFor='search'>Search: </label>
      <input id="search" type="text" onChange={handleChange} />
    </div>
  );
}

export default App
