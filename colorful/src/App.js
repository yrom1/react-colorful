import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const colors = [
    '#DCB0CF', // orangy-pink
    '#9CF8EF', // light funky green
    '#E4D5FA', // pinkish white
    '#90E8FA', // electric light greenblue
    '#E7F9D0'  // light limey yellow
  ];

  const getRandomColor = () => {
    return colors[Math.floor(Math.random() * colors.length)];
  }

  const [color, setColor] = useState(getRandomColor());

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
