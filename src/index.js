import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import './Index.css';

export default function Counter() {
    const [count, setCount] = useState(0);

  return (
    <div className='mainBlock'>
        <h1>{count}</h1>
        <button onClick={() => setCount(count + 1)}>Increment</button>
        <button onClick={() => setCount(count - 1)}>Decrement</button>
        <button onClick={() => setCount(0)}>Set Zero</button>
    </div>
  )
}


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Counter />)
