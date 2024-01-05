import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import FoodItems from "./Components/FoodItems";
import ErrorMessage from "./Components/ErrorMessage";
import Container from "./Components/Container";
import FoodInput from "./Components/FoodInput";
import { useState } from "react";

function App() {
  let [Fooditems, setFoodItems] = useState([]);

  let [textToShow, setTextToShow] = useState();
  const onKeyDown = (event) => {
    if (event.key === "Enter") {
      let newFoodItem = event.target.value;
      let newItems = [...Fooditems, newFoodItem];
      setFoodItems(newItems);
    }
  };
  return (
    <Container>
      <h2 className="food-heading">Healthy Food</h2>
      <FoodInput handleKeyDown={onKeyDown} />
      <ErrorMessage items={Fooditems} />
      {/* {textToShow} */}
      <FoodItems items={Fooditems} />
    </Container>
  );
}

export default App;
