import { useEffect, useRef } from "react";

const UseFullScreen = () => {
  const element = useRef();

  const handleClick = () => {
    if (element) {
      const { current } = element;
      current.requestFullscreen();
    }
  };

  const handleExitClick = () => {
    if (document.fullscreenElement !== null) {
      document.exitFullscreen();
    }
  };

  useEffect(() => {}, []);

  return (
    <>
      <h2>✅ UseFullScreen</h2>
      <img ref={element} src="https://i.ibb.co/R6RwNxx/grape.jpg" alt="grape" width="250"></img>
      <br />
      <button onClick={handleClick}>Fullscreen</button>
      <button onClick={handleExitClick}>Exit Fullscreen</button>
    </>
  );
};

export default UseFullScreen;
