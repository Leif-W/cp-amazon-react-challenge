import React from 'react';
import './App.css';
import Header from './Header';

function App() {
  return (
    // CSS BEM: App -> app
    <div className='app'>
      <h1>
        <span role='img' aria-label='emojis fire rocket'>
          🚀🔥
        </span>
        Hello Clever Programmers, let's build the Amazon store!
        <span role='img' aria-label='emojis fire rocket'>
          🔥🚀
        </span>
      </h1>
      <Header/>
      {/* Home */}
    </div>
  );
}

export default App;
