import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

export default function Counter() {
    const [count, setCount] = useState(0);

  return (
    <div className='mainBlock'>
        <h2 className='textCountArea'>Count:</h2>
        <h1 className='numberCountArea'>{count}</h1>
        <button className='buttonTypeOne' onClick={() => setCount(count + 1)}>Increment</button>
        <button className='buttonTypeOne' onClick={() => setCount(count - 1)}>Decrement</button>
        <button className='buttonTypeTwo' onClick={() => setCount(0)}>Set Zero</button>
    </div>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Counter />)
