import CostDate from "../CostDate/CostDate";
import './CostItem.css'
import Card from "../Card/Card";

export default function CostItem() {
    return (
        <Card className="cost-item">
            <CostDate />
            <div className="cost-item__description">
                <h2>Холодильник</h2>
                <div className="cost-item__price">999.99$</div>
            </div>
        </Card>
    )
}
