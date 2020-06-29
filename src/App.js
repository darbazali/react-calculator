import React from "react";
import { render } from "react-dom";
import Calculator from './Calculator'

const App = () => {
  return (
    <div>
      <Calculator />
    </div>
  );
};

render(<App />, document.getElementById("root"));
