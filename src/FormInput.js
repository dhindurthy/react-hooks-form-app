import React, { useState, useRef } from "react";
import useConversionHook from "./useConversionHook";

function FormInput(props) {
  const [isError, setError] = useState();
  const [value, setInputValue] = useState("");
  const convertedValue = useConversionHook(value);
  let inputNumRef = useRef();

  function onBlur() {
    // Similar to this.setState({ isError: 'orange' })
    setError(true);
    if (value.length > 0) {
      setError(false);
    }
  }

  function onChange(e) {
    // Similar to this.setState({ value: 'orange' })
    setInputValue(inputNumRef.current.value);
    // OR e.target.value works too
  }

  return (
    <div>
      <label htmlFor="form-input">Celsius</label>
      <input
        id="form-input"
        value={value}
        onBlur={onBlur}
        onChange={onChange}
        ref={inputNumRef}
        type="number"
      />
      <br />
      <br />
      {convertedValue}
      {isError && <h5>There is an error - its empty</h5>}
    </div>
  );
}

export default FormInput;
