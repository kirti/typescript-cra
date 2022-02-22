import React from 'react';
import './App.css';

interface AppProps {
  firstName: string;
  lastName?: string;
  
}

function App({firstName, lastName}:AppProps) {
  return (
    <div className="App">
      <header className="App-header">
          My name is {firstName} {lastName}
      </header>
    </div>
  );
}

export default App;
