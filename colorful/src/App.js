import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const [clickCount, setClickCount] = useState(0);

  const handleClick = () => {
    setClickCount(clickCount + 1);
  }

  const getRandomColor = () => {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  return (
    <div className="App" onClick={handleClick}>
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <p style={{ textDecoration: 'underline', color: getRandomColor() }}>
          {getRandomColor()}
        </p>
      </header>
    </div>
  );
}

export default App;
