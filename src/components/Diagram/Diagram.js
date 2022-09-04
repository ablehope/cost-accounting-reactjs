import DiagramBar from "../DiagramBar/DiagramBar";
import './Diagram.css'

export default function Diagram(props) {

    const dataSetValues = props.dataSets.map((dataSet) => dataSet.value)

    const maxMonthCosts = Math.max(...dataSetValues)

    return(
        <div className="diagram">
            {props.dataSets.map((dataSet) =>
                <DiagramBar key={dataSet.label}
                            value={dataSet.value}
                            maxValue={maxMonthCosts}
                            label={dataSet.label}/>)}
        </div>
    )
}
