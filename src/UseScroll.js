import React, { useEffect, useState } from "react";

const UseScroll = () => {
  const [position, setPosition] = useState({ scrollX: 0, scrollY: 0 });

  const handleScroll = (event) => {
    const { scrollX, scrollY } = window;

    setPosition({
      scrollX,
      scrollY,
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <h2>✅ UseScroll</h2>
      <h4>scrollX:{position.scrollX}</h4>
      <h4>scrollY:{position.scrollY}</h4>
    </>
  );
};

export default UseScroll;
