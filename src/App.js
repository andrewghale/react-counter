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
    setCount(count - 1);
  }

  const handleReset = () => {
    setCount(0);
  }

  return (
    <div className="App">

      <ButtonAdd buttonFunction={handleIncrement} />
      {/* <button onClick={handleIncrement}>+</button> */}

      <ButtonSubtract buttonFunction={handleDecrement} />
      {/* <button onClick={handleDecrement}>-</button> */}

      <ButtonReset buttonFunction={handleReset} />

      <DisplayCount count={count} />
    </div>
  );
}

export default App;
