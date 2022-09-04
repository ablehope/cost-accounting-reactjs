import './NewCost.css'
import CostForm from "../CostForm/CostForm";
import React, {useState} from "react";

export default function NewCost(props) {

    const [ visible, setVisible ] = useState(false)

    function openFormHandler() {
        setVisible(true)
    }

    function closeFormHandler() {
        setVisible(false)
    }

   function saveCostdataHandler(name, amount, date) {
       const costData = {
           name,
           amount,
           date,
           id: Math.random().toString()
       }
       props.costHandler(costData)
       closeFormHandler()
   }

    return (
        <div className="new-cost">
            <h1>Учет расходов</h1>
            {!visible &&
            <button onClick={openFormHandler}>Добавить новый расход</button>}
            {visible &&
            <CostForm onSaveCostDataHandler={saveCostdataHandler}
                      closeFormHandler={closeFormHandler}/>}
        </div>
    )
}
