import React, { useState, useEffect } from "react";

const UsePreventLeave = () => {
  const [isBeforeunload, setIsBeforeunload] = useState(false);

  const beforeunloadCallback = (event) => {
    event.preventDefault();
    event.returnValue = "";
  };

  const onClickBeforeunload = () => {
    window.addEventListener("beforeunload", beforeunloadCallback);
    setIsBeforeunload(true);
  };

  const onClickUnBeforeunload = () => {
    window.removeEventListener("beforeunload", beforeunloadCallback);
    setIsBeforeunload(false);
  };

  useEffect(() => {
    return () => window.removeEventListener("beforeunload", beforeunloadCallback);
  }, []);

  return (
    <>
      <h2>✅ UsePreventLeave</h2>
      <button onClick={onClickBeforeunload}>Beforeunload</button>
      <button onClick={onClickUnBeforeunload}>UnBeforeunload</button>
      <h4>{isBeforeunload ? "Protected" : "UnProtected"}</h4>
    </>
  );
};

export default UsePreventLeave;
