import React from "react";
import DSKButton from "./DSKButton";
import Hello from "./Hello";
import Random from "./Random";

const App = () => {
  return (
    <>
      <div>
        {/* <h1>Hello World</h1> */}
        <Hello />
        <DSKButton />
        <Random />
      </div>
    </>
  );
};

export default App;
