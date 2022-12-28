import React, { useRef } from 'react';
import sound from '../soundGo.mp3';
import { Link } from 'react-router-dom';

const Button = () => {
  const audioRef = useRef(null);

  const handleClick = () => {
    audioRef.current.play();
  };

  return (
    <>
      <button onClick={handleClick}>Reproducir sonido</button>
      <audio ref={audioRef} src={sound}></audio>
    </>
  );
};

export default Button;