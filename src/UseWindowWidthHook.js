import React, { useState, useEffect } from "react";

function UseWindowWidthHook() {
  /*
  Creating a state here 'width' and this state can be 
  used by multiple components. That is why hooks are used. 
  I can modify the 'state' here to whatever i want, 
  in this case I am wathcing wwindow.innerWidth. 
  Also can pass paramenters to the hook and can get a value out of it
  */
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  });

  return width;
}

export default UseWindowWidthHook;
