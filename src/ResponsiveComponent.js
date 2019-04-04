import React from "react";
import UseWindowWidthHook from "./UseWindowWidthHook";

function ResponsiveComponent() {
  const width = UseWindowWidthHook();
  return <h4>Width of the window is: {width}</h4>;
}

export default ResponsiveComponent;
