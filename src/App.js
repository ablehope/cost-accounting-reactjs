import Costs from "./components/Costs/Costs";
import NewCost from "./components/NewCost/NewCost";
import {useState} from "react";

function App() {

  const [ cost, setCost ] = useState([])

  function addCostHandler(costData) {
    setCost(cost.concat(costData))
  }

  return (
    <div>
      <NewCost costHandler={addCostHandler} />
      <Costs costs={cost} />
    </div>
  );
}

export default App;
