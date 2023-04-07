import * as React from 'react';
import './App.css';
import { PageRouter }  from './components/router/pages.routes';
const App = () => {

  return (
    <div>
      <div className="root" role="main">
      </div>
      <PageRouter />
    </div>
  );
}

export default App;
