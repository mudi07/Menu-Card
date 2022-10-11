import React, { useEffect, useState } from "react";
import "./styles.css";
const UseEffect = () => {
  const initialData = 0;
  const [myNum, setmyNum] = React.useState(initialData);
  useEffect(() => {
    document.title = `Chats(${myNum})`;
  });
  return (
    <>
      <div className="center_div">
        <p>{myNum}</p>
        <div class="button2" onClick={() => setmyNum(myNum + 1)}>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          INCR
        </div>
      </div>
    </>
  );
};

export default UseEffect;
