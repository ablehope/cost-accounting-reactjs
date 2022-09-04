import Costs from "./components/Costs/Costs";
import NewCost from "./components/NewCost/NewCost";

function App() {

  function addCostHandler(costData) {
    const data = {
      ...costData
    }
    console.log('App component', data)
  }

  return (
    <div>
      <NewCost costHandler={addCostHandler} />
      <Costs />
    </div>
  );
}

export default App;
