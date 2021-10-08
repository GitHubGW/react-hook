import React, { useState, useRef } from "react";

const UseFadeIn = () => {
  const [isHide, setIsHide] = useState(false);
  const element = useRef();
  const showHideButton = useRef();

  const handleShowHideButton = () => {
    const { current: h2Tag } = element;
    const { current: buttonTag } = showHideButton;

    if (isHide === false) {
      h2Tag.style.transition = "1s";
      h2Tag.style.opacity = "0";
      buttonTag.innerText = "Show";
      setIsHide(true);
    } else {
      h2Tag.style.transition = "1.5s";
      h2Tag.style.opacity = "1";
      buttonTag.innerText = "Hide";
      setIsHide(false);
    }
  };

  return (
    <>
      <h2 ref={element}>✅ UseFadeIn</h2>
      <button ref={showHideButton} onClick={handleShowHideButton}>
        Hide
      </button>
    </>
  );
};

export default UseFadeIn;
