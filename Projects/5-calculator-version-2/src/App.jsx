import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./App.module.css";
import Display from "./Components/Display";
import ButtonsContainer from "./Components/ButtonsContainer";
import Heading from "./Components/Heading";
import { useState } from "react";

function App() {
  const [CalVal, setCalVal] = useState("");
  const OnButtonClick = (Buttontext) => {
    if (Buttontext === "C") {
      setCalVal("");
    } else if (Buttontext === "=") {
      const result = eval(CalVal);
      setCalVal(result);
    } else {
      const newDisplayValue = CalVal + Buttontext;
      setCalVal(newDisplayValue);
    }
  };
  return (
    <>
      <Heading title="Calculator" />
      <div className={styles.calculator}>
        <Display displayvalue={CalVal} />
        <ButtonsContainer onButtonClick={OnButtonClick} />
      </div>
    </>
  );
}

export default App;
