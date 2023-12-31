import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  let FoodItems = ["Dal", "Milk", "Salad", "Veg", "Fruits"];
  // let FoodItems = [];

  // Condiitional Rendering

  // // 1 - If-Else
  // if (FoodItems.length === 0) {
  //   <h2>I am Still Hungry</h2>;
  // }

  // // 2 - Ternary Operator
  // let EmptyMessage =
  //   FoodItems.length === 0 ? <h2>"I'm still Hungry"</h2> : null;

  return (
    <>
      <h2>Healthy Food</h2>
      {/* {EmptyMessage} */}

      {/* 3 - Logical operators */}
      {FoodItems.length === 0 && <h4>I'm Still Hungry</h4>}

      {/* Map Method */}

      <ul className="list-group">
        {FoodItems.map((item) => (
          <li key={item} className="list-group-item">
            {item}
          </li>
        ))}

        {/* <li className="list-group-item">Dal</li>
        <li className="list-group-item">Green vegetables</li>
        <li className="list-group-item">Salad</li>
        <li className="list-group-item">Milk</li>
        <li className="list-group-item">Eggs</li> */}
      </ul>
    </>
  );
}

export default App;
