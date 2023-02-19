import * as React from 'react';
import './App.css';
import { ToolBar }  from './components/toolbar/toolbar';
import { Content } from './components/content/content.jsx';

const App = () => {
  
  return (
    <div>
      <div className="root" role="main">
      </div>
      <ToolBar />
      <Content />
    </div>
  );
}

export default App;
