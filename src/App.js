import React, { useState } from 'react';
import './App.css';
import DisplayCount from './DisplayCount';
import ButtonAdd from './ButtonAdd';
import ButtonSubtract from './ButtonSubtract';
import ButtonReset from './ButtonReset';

const App = () => {

  const [ count, setCount ] = useState(0);

  const handleIncrement = () => {
    setCount(count + 1);
  }

  const handleDecrement = () => {
    if (count >= 1) {
      setCount(count - 1);
    }
  }

  const handleReset = () => {
    setCount(0);
  }

  return (
    <div className="App">
      <div className="buttons">
        <ButtonAdd buttonFunction={handleIncrement} />
        <ButtonSubtract buttonFunction={handleDecrement} />
        <ButtonReset count={count} buttonFunction={handleReset} />
      </div>
      <DisplayCount count={count} />
    </div>
  );
}

export default App;
