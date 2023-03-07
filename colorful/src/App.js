import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from 'react';

function ColorSection({ color, isFullScreen, header, text, image }) {
  const height = isFullScreen ? '100vh' : 'auto';
  const style = {
    backgroundColor: color,
    height: height,
    padding: '20px',
    borderRadius: `${Math.random() * 100}% ${Math.random() * 100}% ${Math.random() * 100}% ${Math.random() * 100}% / ${Math.random() * 100}% ${Math.random() * 100}% ${Math.random() * 100}% ${Math.random() * 100}%`
  };
  const imgStyle = {
    maxWidth: '25%',
    height: 'auto'
  };

  return (
    <div style={style}>
      <h1>{header}</h1>
      {image && <img src={image} alt="" style={imgStyle} />}
      <p>{text}</p>
    </div>
  );
}

function generateRandomColors(len, getRandomColor) {
  const initialColors = [];
  let lastColor = '';
  for (let i = 0; i < len; i++) {
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
      isFullScreen: false,
      image: "https://upload.wikimedia.org/wikipedia/commons/8/87/Vincent_van_Gogh_-_Head_of_a_skeleton_with_a_burning_cigarette_-_Google_Art_Project.jpg"
    },
    {
      header: "Making stuff is fun",
      text: "This is the third section. It adjusts to the size of the text.",
      isFullScreen: false,
    },
    {
      header: "I like colors",
      text: "This is the third section. It adjusts to the size of the text.",
      isFullScreen: false
    },
    {
      header: "And websites",
      text: "This is the fourth section. It adjusts to the size of the text.",
      isFullScreen: false
    },
  ];

  const numComponents = sections.length + 1; // headerbar
  const [colorsState, setColorsState] = useState(() => generateRandomColors(numComponents, getRandomColor));

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleScroll = () => {
    setColorsState(generateRandomColors(numComponents, getRandomColor));
  };

  const handleClick = () => {
    // horrible
    setColorsState(generateRandomColors(numComponents, getRandomColor));
  }

  function HeaderBar({ color }) {
    return (
      <div style={{ margin: '0', backgroundColor: color, fontSize: 'large', height: '50px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0 20px' }}>
        <p></p>
        <p></p>
        <p>
          <a href="https://www.github.com/yrom1" style={{ textDecoration: 'none' }}><b>github.com/yrom1/</b></a>
        </p>
        <p >
          <b>Toronto</b>
        </p>
        <p></p>
      </div>
    );
  }

  return (
    <div onClick={handleClick}>
      <HeaderBar color={colorsState[0]} />
      {sections.map((section, index) => (
        <ColorSection
          key={index}
          color={colorsState[index + 1]} // skip the color of the header bar
          isFullScreen={section.isFullScreen}
          header={section.header}
          text={section.text}
          image={section.image}
        />
      ))}
    </div>
  );
}

export default App;
