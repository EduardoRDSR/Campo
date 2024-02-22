import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import girassol from './images/sunflower.png'

interface Sunflower {
  id: number;
  xPos: number;
  yPos: number;
}

const Field = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
  background-color: #c3d825;
  overflow: hidden;
`;

const SunflowerImage = styled.img`
  position: absolute;
  width: 50px;
  height: 50px;
`;

const TopText = styled.div`
  position: absolute;
  top: 20px;
  left: 50%;
  transform: translateX(-50%);
  font-size: 24px;
  font-weight: bold;
  z-index: 1;
  font-family: 'Dancing Script', cursive;
  color: #232C35
`;

const App: React.FC = () => {
  const [sunflowers, setSunflowers] = useState<Sunflower[]>([]);

  useEffect(() => {
    const interval = setInterval(() => {
      const newSunflower: Sunflower = {
        id: Math.random(),
        xPos: Math.random() * window.innerWidth,
        yPos: Math.random() * window.innerHeight,
      };
      setSunflowers(prevSunflowers => [...prevSunflowers, newSunflower]);
    }, 500);

    return () => clearInterval(interval);
  }, []);

  return (
    <Field>
      <TopText>Os girassóis representam o meu amor por você!!!</TopText>
      {sunflowers.map(sunflower => (
        <SunflowerImage
          key={sunflower.id}
          src={girassol}
          alt="sunflower"
          style={{ left: `${sunflower.xPos}px`, top: `${sunflower.yPos}px` }}
        />
      ))}
    </Field>
  );
};

export default App;