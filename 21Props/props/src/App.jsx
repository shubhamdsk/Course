import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import FoodItems from "./Components/FoodItems";
import ErrorMessage from "./Components/ErrorMessage";
import Container from "./Components/Container";
import FoodInput from "./Components/FoodInput";

function App() {
  let Fooditems = ["Dal", "Milk", "Salad", "Veg", "Fruits"];
  const handleOnChange = (event) => {
    console.log(event.target.value);
  };
  return (
    <Container>
      <h2 className="food-heading">Healthy Food</h2>

      <ErrorMessage items={Fooditems} />
      <FoodInput handleOnChange={handleOnChange} />
      <FoodItems items={Fooditems} />
    </Container>
  );
}

export default App;
