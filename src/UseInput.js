import React, { useState } from "react";

const UseInput = () => {
  const [value, setValue] = useState("");

  const onChange = (event) => {
    const {
      target: { value },
    } = event;

    if (value.length < 10 && !value.includes("@")) {
      setValue(value);
    }
  };

  return (
    <>
      <h2>✅ UseInput</h2>
      <form>
        <input type="text" placeholder="Write your Name" value={value} onChange={onChange}></input>
      </form>
    </>
  );
};

export default UseInput;
