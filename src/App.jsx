import React from 'react';
import ReactDOM from 'react-dom';

function App() {
  window.ketchup = () => {
    const img = document.createElement('img');
    img.src = 'https://images.unsplash.com/photo-1598679253544-2c97992403ea?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D';
    document.body.appendChild(img);
  };

  return <button onClick={window.ketchup}>Show Image</button>;
}

ReactDOM.render(<App />, document.getElementById('root'));

