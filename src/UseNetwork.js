import React, { useEffect, useRef, useState } from "react";

const UseNetwork = () => {
  const [isOnline, setIsOnline] = useState(navigator.onLine);
  const element = useRef();

  const handleNetwork = () => {
    const { current } = element;

    if (isOnline === true) {
      setIsOnline(false);
      current.innerText = "You are Offline!";
    } else {
      setIsOnline(true);
      current.innerText = "You are Online!";
    }
  };

  useEffect(() => {
    window.addEventListener("online", handleNetwork);
    window.addEventListener("offline", handleNetwork);

    return () => {
      window.removeEventListener("online", handleNetwork);
      window.removeEventListener("offline", handleNetwork);
    };
  }, [isOnline]);

  return (
    <>
      <h2>✅ UseNetwork</h2>
      <h4 ref={element}>You are Online!</h4>
    </>
  );
};

export default UseNetwork;
