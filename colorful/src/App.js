import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const [color, setColor] = useState(0);

  const getRandomColor = () => {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  const handleClick = () => {
    setColor(getRandomColor());
  }

  return (
    <div className="App" onClick={handleClick}>
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <p style={{ textDecoration: 'underline', color: color }}>
          {color}
        </p>
      </header>
    </div>
  );
}

export default App;
