import React, { useState, useEffect } from "react";

const UseBeforeLeave = () => {
  const [isMouseLeave, setIsMouseLeave] = useState(false);

  const handleMouseEnter = () => {
    setIsMouseLeave(false);
  };

  const handleMouseLeave = () => {
    setIsMouseLeave(true);
  };

  useEffect(() => {
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseenter", handleMouseEnter);
    return () => {
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseenter", handleMouseEnter);
    };
  }, []);

  return (
    <>
      <h2>✅ UseBeforeLeave</h2>
      <h4>{isMouseLeave ? "MouseLeave!" : "MouseEnter!"}</h4>
    </>
  );
};

export default UseBeforeLeave;
