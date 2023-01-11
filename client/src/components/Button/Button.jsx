import React, { useRef } from 'react';
import sound from '../soundGo.mp3';
import { Link, useNavigate} from 'react-router-dom';

const Button = () => {

  const history = useNavigate();
  const audio = new Audio(sound);

  function handleClick() {
    audio.play();
    history.push(`${<Link to='/home'/>}`);
  }

  return (
    <button onClick={handleClick}>
      Reproducir sonido y redireccionar
    </button>
  );

/*   const audioRef = useRef(null);

  const handleClick = () => {
    audioRef.current.play();
  };

  return (
    <>
      <button onClick={handleClick}>Reproducir sonido</button>
      <audio ref={audioRef} src={sound}></audio>
    </>
  ); */
};

export default Button;