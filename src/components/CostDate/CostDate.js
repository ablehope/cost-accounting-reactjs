import './CostDate.css';

export default function CostDate(props) {
    return(
        <div className="cost-date">
            <div className="cost-date__year">{props.date.split('-')[0]}</div>
            <div className="cost-date__month">{props.date.split('-')[1]}</div>
            <div className="cost-date__day">{props.date.split('-')[2]}</div>
        </div>
    )
}
