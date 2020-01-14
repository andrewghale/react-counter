import React, { useState } from 'react';
import './App.css';
import DisplayCount from './DisplayCount';

const App = () => {

  const [ count, setCount ] = useState(0);

  return (
    <div className="App">
      <button onClick={() => setCount(count + 1)}>+</button>
      <DisplayCount count={count} />
    </div>
  );
}

export default App;
