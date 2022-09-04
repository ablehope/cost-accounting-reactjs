import CostItem from "../CostItem/CostItem";
import './Costs.css'
import Card from "../Card/Card";
import CostsFilter from "../CostFilter/CostsFilter";
import React, { useState } from "react";
import CostsDiagram from "../CostsDiagram/CostsDiagram";

export default function Costs(props) {

    const [ year, setYear ] = useState('2022')

    function onChangeYear(year) {
        setYear(year)
    }

    const filteredCosts = props.costs.filter((cost) => year === cost.date.split('-')[0])

    let costContent = 'В этом году расходов нет';
    if(props.costs.length > 0) {
        costContent = props.costs.map((cost) => (
            year === cost.date.split('-')[0] &&
            <CostItem key={cost.id} name={cost.name} amount={cost.amount} date={cost.date}/>
        ))
    }

    return (
            <Card className="costs">
                <CostsFilter year={year} onChangeYear={onChangeYear} />
                <CostsDiagram costs={filteredCosts}/>
                {costContent}
            </Card>
    )
}
