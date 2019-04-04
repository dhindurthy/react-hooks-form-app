import React, { useState } from "react";
import UseWindowWidthHook from "./UseWindowWidthHook";

function FormButton(props) {
  const width = UseWindowWidthHook();
  function onClick(e) {
    alert("clicked button");
    e.preventDefault();
  }
  return (
    <React.Fragment>
      <button
        type="submit"
        onClick={onClick}
        className={width > 650 ? "button-green" : "button-red"}
      >
        Submit
      </button>
    </React.Fragment>
  );
}

export default FormButton;
