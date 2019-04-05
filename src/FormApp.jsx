// import React from "react";
import FormInput from "./FormInput";
import FormButton from "./FormButton";
import ResponsiveComponent from "./ResponsiveComponent";
import React from "react";

function FormApp() {
  function onChange() {
    // console.log("in app change");
  }

  return (
    <section>
      <form>
        <fieldset>
          <legend> Simple Form</legend>
          <FormInput onChange={onChange()} />
        </fieldset>
        <section className="section-2">
          <ResponsiveComponent />
          <hr />
          <sub>
            Adjust window size to see the above width value and below button
            color change
          </sub>
          <hr />
          <FormButton />
        </section>
      </form>
    </section>
  );
}

export default FormApp;
