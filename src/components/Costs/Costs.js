import CostItem from "../CostItem/CostItem";
import './Costs.css'
import Card from "../Card/Card";
import CostsFilter from "../CostFilter/CostsFilter";
import React, { useState } from "react";

export default function Costs() {

    const [ year, setYear ] = useState('2022')

    function onChangeYear(year) {
        setYear(year)
    }

    return (
            <Card className="costs">
                <CostsFilter year={year} onChangeYear={onChangeYear} />
                <CostItem />
                <CostItem />
                <CostItem />
            </Card>
    )
}
