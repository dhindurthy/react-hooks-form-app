import React, { useState, useEffect } from "react";

function useConversionHook(value) {
  /*
  Creating a state here 'convertedValue' and this state can be 
  used by multiple components. That is why hooks are used. 
  I can modify the 'state' here to whatever i want, 
  in this case I am wathcing the "value" (the parameter provided 
  to the hook) and use some mathematics to convert it to Farenheit
  Also can pass paramenters to the hook and can get a value out of it,like above.
  The useEffect can be run everytime the "value" is updated.
  you can think of useEffect Hook as componentDidMount, componentDidUpdate, 
  and componentWillUnmount combined
  */
  console.log(value);
  const [convertedValue, setConversion] = useState();
  const [text, setText] = useState("");

  useEffect(() => {
    if (value < 100) {
      setConversion(value * 1.8 + 32);
      setText("In Farenheit: ");
    }
    return () => {
      setConversion(value);
      setText("Above 100 is same: ");
    };
  });

  return [text, convertedValue];
}

export default useConversionHook;
