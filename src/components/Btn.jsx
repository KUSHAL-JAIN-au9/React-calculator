import React from "react";

const Btn = ({ style, handleCLick, innerText }) => {
  return (
    <div className={style} onClick={handleCLick}>
      {innerText}
    </div>
  );
};

export default Btn;
