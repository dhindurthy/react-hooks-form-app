import React, { useState } from "react";

function FormInput(props) {
  const [isError, setError] = useState();
  const [inputValue, setInputValue] = useState("");

  function onBlur() {
    // Similar to this.setState({ isError: 'orange' })
    setError(true);
    if (inputValue.length > 0) {
      setError(false);
    }
  }

  function onChange(e) {
    // Similar to this.setState({ value: 'orange' })
    setInputValue(e.target.value);
  }

  return (
    <React.Fragment>
      <label htmlFor="form-input">Input element</label>
      <input
        id="form-input"
        value={inputValue}
        onBlur={onBlur}
        onChange={onChange}
        ref={props.textInputRef}
      />

      {isError && <h5>There is an error - its empty</h5>}
    </React.Fragment>
  );
}

export default FormInput;
