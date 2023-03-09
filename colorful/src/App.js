import logo from './logo.svg';
import './App.css';
import { debounce } from 'lodash';
import { useState, useEffect } from 'react';

function ColorSection({ color, content }) {
  const style = {
    color: color,
    borderLeft: `2px solid ${color}`,
    padding: '20px',
    textDecoration: 'underline',
  };
  return (
    <div style={style}>
      {content}
    </div>
  );
}

function generateRandomColors(len, getRandomColor) {
  const colors = [];
  let lastColor = '';
  for (let i = 0; i < len; i++) {
    let color = getRandomColor(lastColor);
    lastColor = color;
    colors.push(color);
  }

  // if (colors.length > 1) {
  //   // Keep getting a new color and making it the last element of the array
  //   while (colors[0] === colors[colors.length - 1]) {
  //     let color = getRandomColor(lastColor);
  //     lastColor = color;
  //     colors[colors.length - 1] = color;
  //   }
  // }
  return colors;
}

function App() {
  const colors = [
    '#DCB0CF', // orangy-pink
    '#9CF8EF', // light funky green
    // '#C773AD', // colar pink
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
    <>
      <h1>Yo I'm Ryan</h1>
      <p>This is the first section. It takes up the whole height of the viewport.</p>
    </>,
    <>
      <h2>I'm sick af</h2>
      <p>This is the second section. It adjusts to the size of the text.</p>
      <img
        style={{
          maxWidth: '25%',
          height: 'auto'
        }}
        src="https://upload.wikimedia.org/wikipedia/commons/8/87/Vincent_van_Gogh_-_Head_of_a_skeleton_with_a_burning_cigarette_-_Google_Art_Project.jpg"
        alt="Vincent van Gogh - Head of a skeleton with a burning cigarette"
      />
    </>,
    <>
      <h2>Making stuff is fun</h2>
      <p>This is the third section. It adjusts to the size of the text.</p>
    </>,
    <>
      <h2>I like colors</h2>
      <p>This is the fourth section. It adjusts to the size of the text.</p>
    </>,
    <>
      <h2>And websites</h2>
      <p>This is the fifth section. It adjusts to the size of the text.</p>
    </>,
  ];


  const numComponents = sections.length + 2; // headerbar + footerbar
  const [colorsState, setColorsState] = useState(() => generateRandomColors(numComponents, getRandomColor));

  const handleScroll = debounce(() => {
    setColorsState(generateRandomColors(numComponents, getRandomColor));
  }, 100);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleClick = () => {
    // horrible
    setColorsState(generateRandomColors(numComponents, getRandomColor));
  }

  function HeaderBar({ color, content }) {
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

  function Bar({ color, content }) {
    return (
      <div style={{ backgroundColor: color }}>
        {content}
      </div>
    );
  }

  useEffect(() => {
    console.log(colorsState)
    document.body.style.backgroundColor = colorsState[0];
  }, [colorsState]);

  const bar_style = {
    margin: '0', fontSize: 'large', height: '50px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0 20px'
  }

  const header_content = (
    <div style={bar_style}>
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
  const footer_content = (
    <div style={bar_style}>
      <p></p>
      <p></p>
      <p></p>
      <p><i><b>Thanks for visiting</b></i></p>
      <p></p>
    </div>
  )
  const foo = (
    <div>
      <p>Hewwo</p>
    </div>
  )

  return (
    <div onClick={handleClick} style={{ backgroundColor: '#1F2225' }}>
      <Bar color={colorsState[0]} content={header_content} />
      {/* <div style={{ paddingTop: '100vh' }}><p>Hi</p></div> */}
      {sections.map((_, index) => (
        <ColorSection
          key={index}
          color={colorsState[index + 1]} // skip the color of the header bar
          content={_}
        />
      ))}
      <Bar color={colorsState[0]} content={footer_content} />
    </div>
  );
}

export default App;
