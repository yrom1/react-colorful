import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function ColorSection({ color, isFullScreen, header, text }) {
  const height = isFullScreen ? '100vh' : 'auto';
  const style = {
    backgroundColor: color,
    height: height,
    padding: '20px'
  };

  return (
    <div style={style}>
      <h1>{header}</h1>
      <p>{text}</p>
    </div>
  );
}

function App() {
  const colors = [
    '#DCB0CF', // orangy-pink
    '#9CF8EF', // light funky green
    '#C773AD', // colar pink
    '#E4D5FA', // pinkish white
    '#90E8FA', // electric light greenblue
    '#E7F9D0'  // light limey yellow
  ];

  const [color1, setColor1] = useState(colors[0]);
  const [color2, setColor2] = useState(colors[1]);

  const handleClick = () => {
    const randomIndex1 = Math.floor(Math.random() * colors.length);
    const randomIndex2 = Math.floor(Math.random() * colors.length);
    setColor1(colors[randomIndex1]);
    setColor2(colors[randomIndex2]);
  }

  return (
    <div onClick={handleClick}>
      <ColorSection
        color={color1}
        isFullScreen={true}
        header="Section 1 Header"
        text="This is the first section. It takes up the whole height of the viewport."
      />
      <ColorSection
        color={color2}
        isFullScreen={false}
        header="Section 2 Header"
        text="This is the second section. It adjusts to the size of the text."
      />
    </div>
  );
}

export default App;
