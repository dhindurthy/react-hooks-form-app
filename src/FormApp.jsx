// import React from "react";
import FormInput from "./FormInput";
import FormButton from "./FormButton";
import ResponsiveComponent from "./ResponsiveComponent";
import React, { useState } from "react";

function FormApp() {
  const inputElement = React.createRef();

  const [mytextvalue, setMytextvalue] = useState("3767");

  function onChange() {
    console.log("in app change");
  }

  return (
    <section>
      <form>
        <fieldset>
          <legend> Simple Form</legend>
          <FormInput
            inputValue={mytextvalue}
            textInputRef={inputElement}
            onChange={onChange()}
          />
        </fieldset>
        <ResponsiveComponent />
        <hr />
        <sub>
          Adjust window size to see the above width value and below button color
          change
        </sub>
        <hr />
        <FormButton />
      </form>
    </section>
  );
}

export default FormApp;
