import CostDate from "../CostDate/CostDate";
import './CostItem.css'
import Card from "../Card/Card";

export default function CostItem(props) {
    return (
        <Card className="cost-item">
            <CostDate date={props.date} />
            <div className="cost-item__description">
                <h2>{props.name}</h2>
                <div className="cost-item__price">{props.amount}$</div>
            </div>
        </Card>
    )
}
