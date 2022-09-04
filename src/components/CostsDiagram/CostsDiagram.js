import Diagram from "../Diagram/Diagram";


export default function CostsDiagram(props) {

    const diagramDataSets = [
        { label: '01', value: 0 },
        { label: '02', value: 0 },
        { label: '03', value: 0 },
        { label: '04', value: 0 },
        { label: '05', value: 0 },
        { label: '06', value: 0 },
        { label: '07', value: 0 },
        { label: '08', value: 0 },
        { label: '09', value: 0 },
        { label: '10', value: 0 },
        { label: '11', value: 0 },
        { label: '12', value: 0 }
    ]

    for(const cost of props.costs) {
        const costMonth = cost.date.split('-')[1]
        console.log(costMonth, cost.amount)
        diagramDataSets.value += cost.amount
    }

    return <Diagram dataSets={diagramDataSets} />
}
