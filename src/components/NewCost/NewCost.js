import './NewCost.css'
import CostForm from "../CostForm/CostForm";

export default function NewCost(props) {

   function saveCostdataHandler(name, amount, date) {
       const costData = {
           name,
           amount,
           date,
           id: Math.random().toString()
       }
       props.costHandler(costData)
       console.log('new cost component', costData)
   }

    return (
        <div className="new-cost">
            <h1>Cost Accounting</h1>
            <CostForm onSaveCostDataHandler={saveCostdataHandler} />
        </div>
    )
}
