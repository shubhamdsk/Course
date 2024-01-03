import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./App.module.css";
import Display from "./Components/Display";
import ButtonsContainer from "./Components/ButtonsContainer";
import Heading from "./Components/Heading";

function App() {
  return (
    <>
      <Heading title="Calculator" />
      <div className={styles.calculator}>
        <Display />
        <ButtonsContainer />
      </div>
    </>
  );
}

export default App;
