import React, { useState } from 'react';

function App() {
  const [imageSrc, setImageSrc] = useState('');

  const ketchup = () => {
    setImageSrc('https://images.unsplash.com/photo-1598679253544-2c97992403ea?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D');
  };

  return (
    <div>
      <button onClick={ketchup}>Show Image</button>
      {imageSrc && <img src={imageSrc} alt="Ketchup Image" />}
    </div>
  );
}

export default App;
