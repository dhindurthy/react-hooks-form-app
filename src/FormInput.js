import React, { useState, useRef } from "react";
import useConversionHook from "./useConversionHook";

function FormInput(props) {
  const [isError, setError] = useState(false);
  const [value, setInputValue] = useState(0);
  const [valueC, setInputValueC] = useState(0);
  const convertedValue = useConversionHook("temparature", value);
  const convertedValueC = useConversionHook("weight", valueC);
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
    setInputValue(e.target.value);
    // OR e.target.value works too
  }

  function onChangeC(e) {
    // Similar to this.setState({ value: 'orange' })
    setInputValueC(e.target.value);
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
      {convertedValue}
      <br />
      <br />
      <label htmlFor="currency-input">Currency USD</label>
      <input
        id="currency-input"
        value={valueC}
        onChange={onChangeC}
        ref={inputNumRef}
        type="number"
      />
      <br />
      {convertedValueC}
      {isError && <h5>There is an error - its empty</h5>}
    </div>
  );
}

export default FormInput;
