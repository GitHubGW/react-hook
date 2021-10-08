import React, { useState } from "react";

const UseConfirm = () => {
  const [isConfirm, setIsConfirm] = useState(false);

  const handleButton = () => {
    const confirmValue = window.confirm("Are you sure?");
    if (confirmValue === true) {
      setIsConfirm(true);
    } else {
      setIsConfirm(false);
    }
  };

  return (
    <>
      <h2>✅ UseConfirm</h2>
      <button type="button" onClick={handleButton}>
        Confirm
      </button>
      <h4>{isConfirm ? "확인" : "취소"}</h4>
    </>
  );
};

export default UseConfirm;
