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

  const getRandomColor = (lastColor) => {
    let color = lastColor;
    while (color === lastColor) {
      color = colors[Math.floor(Math.random() * colors.length)];
    }
    return color;
  }

  const sections = [
    {
      header: "Yo I'm Ryan",
      text: "This is the first section. It takes up the whole height of the viewport.",
      isFullScreen: true
    },
    {
      header: "I'm sick af",
      text: "This is the second section. It adjusts to the size of the text.",
      isFullScreen: false
    },
    // Add more objects with different props here to add more sections
  ];

  const [colorsState, setColorsState] = useState(() => {
    // Initialize the colors state array with random colors, ensuring no two adjacent colors are the same
    const initialColors = [];
    let lastColor = '';
    for (let i = 0; i < sections.length; i++) {
      let color = getRandomColor(lastColor);
      lastColor = color;
      initialColors.push(color);
    }
    return initialColors;
  });

  const handleClick = () => {
    // Set a new colors state array with random colors, ensuring no two adjacent colors are the same
    const newColors = [];
    let lastColor = '';
    for (let i = 0; i < colorsState.length; i++) {
      let color = getRandomColor(lastColor);
      lastColor = color;
      newColors.push(color);
    }
    setColorsState(newColors);
  }

  return (
    <div onClick={handleClick}>
      {sections.map((section, index) => (
        <ColorSection
          key={index}
          color={colorsState[index]}
          isFullScreen={section.isFullScreen}
          header={section.header}
          text={section.text}
        />
      ))}
    </div>
  );
}

export default App;
