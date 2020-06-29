import React from "react";
import { render } from "react-dom";
import Calculator from './Calculator'
import Calc from './Calc';
const App = () => {
  return (
    <div>
      <Calc />
    </div>
  );
};

render(<App />, document.getElementById("root"));
