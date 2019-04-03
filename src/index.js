import React from "react";
import ReactDOM from "react-dom";
import FormApp from "./FormApp";

import "./styles.css";

function App() {
  return (
    <div className="App">
      <FormApp />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
