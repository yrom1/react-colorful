// change all text color to  #DBC1C6
import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function ColorSection({ color, isFullScreen, header, text }) {
  const height = isFullScreen ? '100vh' : 'auto';
  const style = {
    backgroundColor: color,
    height: height,
    padding: '20px',
    borderTop: `5px solid ${color}`, // Add a colored border on top
    color: '#BDC1C6' // Set text color to #DBC1C6
  };

  return (
    <div style={style}>
      <h1>{header}</h1>
      <p>{text}</p>
    </div>
  );
}

function generateRandomColors(sections, getRandomColor) {
  const initialColors = [];
  let lastColor = '';
  for (let i = 0; i < sections.length; i++) {
    let color = getRandomColor(lastColor);
    lastColor = color;
    initialColors.push(color);
  }
  return initialColors;
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
    let color = colors[Math.floor(Math.random() * colors.length)];
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

  const [colorsState, setColorsState] = useState(() => generateRandomColors(sections, getRandomColor));

  const handleClick = () => {
    setColorsState(generateRandomColors(sections, getRandomColor));
  }

  return (
    <div onClick={handleClick}>
      {sections.map((section, index) => (
        <div key={index}> {/* Wrap each section in a div */}
          <div style={{ backgroundColor: colorsState[index], height: '20px' }}></div> {/* Add a colored bar on top */}
          <ColorSection
            color={"#202124"}
            isFullScreen={section.isFullScreen}
            header={section.header}
            text={section.text}
          />
        </div>
      ))}
    </div>
  );
}

export default App;
