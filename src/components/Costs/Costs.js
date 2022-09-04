import CostItem from "../CostItem/CostItem";
import './Costs.css'
import Card from "../Card/Card";
import CostsFilter from "../CostFilter/CostsFilter";
import React, { useState } from "react";

export default function Costs(props) {

    const [ year, setYear ] = useState('2022')

    function onChangeYear(year) {
        setYear(year)
    }

    return (
            <Card className="costs">
                <CostsFilter year={year} onChangeYear={onChangeYear} />
                {props.costs.length === 0 ?
                    'Вы еще не добавили ни одного расхода за этот год...' :
                    props.costs.map((cost) => (
                        year === cost.date.split('-')[0] &&
                        <CostItem key={cost.id} name={cost.name} amount={cost.amount} date={cost.date}/>
                    ))
                }
            </Card>
    )
}
