import React from 'react';
import './App.css';
import Events from './Events';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="text-3xl font-bold underline">My Events App</h1>
      </header>
      <main>
        <Events />
      </main>
    </div>
  );
}

export default App;
