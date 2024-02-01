import { useState } from 'react';

import './App.css';

function App() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };
  const decrement = () => {
    setCount(count - 1);
  };
  const reset = () => {
    setCount(0);
  };

  return (
    <>
      <h1>Vite App</h1>
      <p>Count : {count}</p>

      <button onClick={increment}>Increment</button>
      <div className='card'>
        <button onClick={decrement}>Decrement</button>
      </div>
      <button onClick={reset}>Reset</button>
    </>
  );
}

export default App;
