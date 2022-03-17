import React from 'react';
import Button from "./Button"
import Counter from "./Counter"

function App() {
  return (
    <div>
      <div className='header'>
        <h1 id='title'>My Fidget Cube</h1>
      </div>
      <div className="App">
        <Button/>
        <Counter/>
      </div>
    </div>
  );
}

export default App;
