import CostItem from "../CostItem/CostItem";
import './Costs.css'
import Card from "../Card/Card";

export default function Costs() {
    return (
        <Card className="costs">
            <CostItem />
            <CostItem />
            <CostItem />
        </Card>
    )
}
